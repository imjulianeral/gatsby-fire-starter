import React from 'react'
import { useFirestore, useFirestoreCollection } from 'reactfire'

export default function Records() {
  const productsRef = useFirestore().collection('products')

  const products = useFirestoreCollection(productsRef).docs.map(d => ({
    id: d.id,
    ...d.data(),
  }))

  return (
    <>
      {products.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  )
}
