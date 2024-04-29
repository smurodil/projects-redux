import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import SingleProducts from './components/SingleProducts'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal } from './features/products/productSlice'

function App() {
  const dispatch = useDispatch()
  const { products } = useSelector((store) => store.products)

  useEffect(() => {
    dispatch(calculateTotal())
  }, [products])
  return (
    <>
      <Navbar/>
      <SingleProducts/>
    </>
  )
}

export default App