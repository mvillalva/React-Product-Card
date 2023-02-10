import React, { useState } from 'react'
import ProductCard from '../components/productCard/ProductCard'
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])

  const showProducts = () => {
    return (
      <ul>
        {JSON.stringify(products).split('},{').map((v)=><li>{v}</li>)}
      </ul>
    )
  }
  
  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h1>home</h1>
        <div className='d-flex justify-content-center gap-5 flex-row'>
          {/* Se pasa en la props 'prods' los datos del useState para poder manejarlo desde cada tarjeta de producto y se refleje el cambio a nivel global */}
          <ProductCard prods={{products, setProducts}} id={1} name="Máscara" desc="Producto 1. Acá iría una breve descripción del producto"/>
          <ProductCard prods={{products, setProducts}} id={2} name="Otra Máscara" desc="Producto 2. Acá iría una breve descripción del producto"/>
        </div>
      </div>
      <div className='m-5 text-light'>
        {showProducts()}
      </div>
    </>
  )
}

export default Home