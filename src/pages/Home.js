import React, { useState } from 'react'
import ProductCard from '../components/productCard/ProductCard'
import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])

  const showProducts = () => {
    return (
      <ul className="d-flex gap-5 justify-content-center">
        {
          products.map(e => <li>
                                  <span className="text-warning">id:</span> {e.id} <br /> 
                                  <span className="text-warning">Nombre:</span> {e.nombre} <br /> 
                                  <span className="text-warning">Descripción:</span> {e.desc} <br /> 
                                  <span className="text-warning">Cantidad:</span> {e.cantidad}
                            </li>
                      )
        }
      </ul>
    )
  }
  
  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h1 className='text-light'>Lista de Productos</h1>
        <div className='d-flex justify-content-center gap-5 flex-row mt-5'>
          {/* Se pasa en la props 'prods' los datos del useState para poder manejarlo desde cada tarjeta de producto y se refleje el cambio a nivel global */}
          <ProductCard prods={{products, setProducts}} id={1} name="Máscara" desc="Producto 1. Acá iría una breve descripción del producto"/>
          <ProductCard prods={{products, setProducts}} id={2} name="Otra Máscara" desc="Producto 2. Acá iría una breve descripción del producto"/>
          <ProductCard prods={{products, setProducts}} id={3} name="Máscara 3" desc="Producto 3. Acá iría una breve descripción del producto"/>
        </div>
      </div>
      <div className='m-5 text-light'>
        {showProducts()}
      </div>
    </>
  )
}

export default Home