import React from 'react'
import { render } from '@testing-library/react'

import Footer from '../../components/Footer'

describe('Footer component', () => {
  it('should render Footer component correctly', async () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
