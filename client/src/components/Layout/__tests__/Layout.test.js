import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, waitForElement } from 'react-testing-library'

import reducer from '../../../store/reducers/reducer'
import { Layout } from '..'
import data from './data.mock.json'

describe('Layout should works properly', () => {
  function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store
    }
  }

  const fetchData = jest.fn()

  afterEach(cleanup)

  it('should match snapshot', () => {
    const { container } = renderWithRedux(
      <Layout dataSet={data.data} fetchData={fetchData} />
    )
    expect(container.firstChild).toMatchSnapshot('Layout_snapshot_1')
  })

  it('should show Item Chart if loading is false', async () => {
    const { getByTestId } = render(
      <Layout dataSet={data.data} fetchData={fetchData} loading={false} />
    )
    await waitForElement(() => getByTestId('chart'))
  })
})
