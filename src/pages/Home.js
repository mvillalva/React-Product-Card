import React, { useState } from 'react'
import ProductCard from '../components/productCard/ProductCard'
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])
  
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <h1>home</h1>
      <div className='d-flex justify-content-center gap-5 flex-row'>
        {/* Se pasa en la props 'prods' los datos del useState para poder manejarlo desde cada tarjeta de producto y se refleje el cambio a nivel global */}
        <ProductCard prods={{products, setProducts}} id={1} name="Máscara" desc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        <ProductCard prods={{products, setProducts}} id={2} name="Otra Máscara" desc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      </div>
    </div>
  )
}

export default Home