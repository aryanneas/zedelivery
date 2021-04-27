import React from 'react'
import { render } from '@testing-library/react'

import PageDefault from '../../components/PageDefault'

const SAMPLE_TEXT = 'Testing PageDefault'

describe('PageDefault component', () => {
  it('should render PageDefault component correctly', async () => {
    const { asFragment } = render(<PageDefault />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render any children that is passed', () => {
    const { getByText } = render(
      <PageDefault>
        <p>{SAMPLE_TEXT}</p>
      </PageDefault>
    )

    getByText(SAMPLE_TEXT)
  })
})
