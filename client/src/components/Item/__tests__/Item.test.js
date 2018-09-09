import React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'

import { Item } from '..'
import data from '../../Layout/__tests__/data.mock.json'

describe('Item should works properly', () => {
  const fetchData = jest.fn()

  afterEach(cleanup)

  it('should match snapshot', () => {
    const { container } = render(
      <Item dataSet={data.data} fetchData={fetchData} />
    )
    expect(container.firstChild).toMatchSnapshot('Item_snapshot_1')
  })

  it('should show Chart if loading is false', async () => {
    const { getByTestId } = render(
      <Item dataSet={data.data} fetchData={fetchData} loading={false} />
    )
    await waitForElement(() => getByTestId('chart'))
  })

  it('should show Spinner if loading is true', async () => {
    const { getByTestId } = render(
      <Item dataSet={data.data} fetchData={fetchData} loading={true} />
    )
    await waitForElement(() => getByTestId('spinner'))
  })
})
