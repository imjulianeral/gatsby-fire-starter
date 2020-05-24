import React from "react"
import { useFirestore, useFirestoreCollection } from "reactfire"
// import * as reactfire from "reactfire"
// import useReactfire from "../hooks/useReactfire"

export default function Records() {
  // const reactfire = useReactfire()

  const productsRef = useFirestore().collection("products")

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
