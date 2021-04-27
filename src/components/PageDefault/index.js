import React from 'react'

import Footer from '../Footer'
import Header from '../Header'

function PageDefault({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageDefault
