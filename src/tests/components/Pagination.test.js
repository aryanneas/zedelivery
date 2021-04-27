import React from 'react'
import { render } from '@testing-library/react'

import Pagination from '../../components/Pagination'

const mock = [{ id: 1, name: 'test' }]

describe('Pagination component', () => {
  it('should render Pagination', async () => {
    const { asFragment } = render(
      <Pagination itemsPerPage={10} arrayItems={mock} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
