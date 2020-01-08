import * as React from 'react'
import {mount} from 'enzyme'

import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import {Client, FeedbackStatus} from '../types'
import useClientGet from './useClientGet'
import flushPromises from '../test/flushPromises'

describe('useClientGet', () => {
  test('should call client.get with proper params', async () => {
    const Dummy = (prop: any) => <div />
    const Wrapper = () => {
      const {data, error, feedback} = useClientGet('deal.id')
      return <Dummy data={data} error={error} feedback={feedback} />
    }

    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      get: jest.fn(
        () =>
          new Promise<{'deal.id': number; errors: {}}>((res) =>
            res({'deal.id': 123, errors: {}}),
          ),
      ),
    }

    const tree = mount(
      <ZAFClientContextProvider value={client}>
        <Wrapper />
      </ZAFClientContextProvider>,
    )

    expect(client.get).toHaveBeenCalledWith('deal.id')

    let dummy = tree.find(Dummy)
    let props = dummy.props()
    expect(props.data).toEqual(null)
    expect(props.error).toEqual(null)
    expect(props.feedback).toEqual({status: FeedbackStatus.loading})

    await flushPromises()
    tree.update()

    dummy = tree.find(Dummy)
    props = dummy.props()
    expect(props.data).toEqual(123)
    expect(props.error).toEqual(null)
    expect(props.feedback).toEqual({status: FeedbackStatus.success})

    tree.unmount()
  })
  test('should call client.get and receive an error', async () => {
    const Dummy = (prop: any) => <div />
    const Wrapper = () => {
      const {data, error, feedback} = useClientGet('non.existing.path')
      return <Dummy data={data} error={error} feedback={feedback} />
    }

    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      get: jest.fn(
        () =>
          new Promise<{errors: {}}>((_, reject) =>
            reject({
              errors: {['non.existing.path']: 'Path does not exist'},
            }),
          ),
      ),
    }

    const tree = mount(
      <ZAFClientContextProvider value={client}>
        <Wrapper />
      </ZAFClientContextProvider>,
    )

    expect(client.get).toHaveBeenCalledWith('non.existing.path')

    let dummy = tree.find(Dummy)
    let props = dummy.props()
    expect(props.data).toEqual(null)
    expect(props.error).toEqual(null)
    expect(props.feedback).toEqual({status: FeedbackStatus.loading})

    await flushPromises()
    tree.update()

    dummy = tree.find(Dummy)
    props = dummy.props()
    expect(props.data).toEqual(null)
    expect(props.error).toEqual({
      errors: {'non.existing.path': 'Path does not exist'},
    })
    expect(props.feedback).toEqual({status: FeedbackStatus.error})

    tree.unmount()
  })
})