import React from 'react'
import { render } from '@testing-library/react'

import Header from '../../components/Header'

describe('Header component', () => {
  it('should render Header component correctly', async () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })
})
