import React, { useState } from 'react'

import { CardItem, Price, AddToCart, Count, Button } from './style'

const ProductCard = ({ product }) => {
  let [count, setCount] = useState(0)

  const increase = () => setCount(count + 1)

  const decrease = () => setCount(count - 1)

  return (
    <CardItem>
      <img
        src={product.image}
        title={product.title}
        alt={product.title}
        style={{ height: 200, width: 200 }}
      />
      <p>{product.title}</p>
      <Price>R$ {product.price}</Price>

      <AddToCart>
        <Button
          onClick={() => decrease()}
          disabled={count === 0 ? true : false}
        >
          -
        </Button>
        <Count>{count}</Count>
        <Button onClick={() => increase()}>+</Button>
      </AddToCart>
    </CardItem>
  )
}

export default ProductCard
