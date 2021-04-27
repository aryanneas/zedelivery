import React, { useEffect, useState } from 'react'

import PageDefault from '../../components/PageDefault'
import Pagination from '../../components/Pagination'
import ProductCard from '../../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState(localStorage.getItem('product'))

  useEffect(() => {
    setProducts(localStorage.getItem('product'))
  }, [products])

  return (
    <PageDefault>
      <Pagination itemsPerPage={10} arrayItems={products}>
        {JSON.parse(products).map((item, index) => {
          return <ProductCard key={index} product={item} />
        })}
      </Pagination>
    </PageDefault>
  )
}

export default Products
