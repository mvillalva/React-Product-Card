import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import logo from "../../img/cosmetico.jpg";
import './ProductCard.css'

const ProductCard = ({prods, id, name, desc}) => {
    const [cantidad, setCantidad] = useState(0)

    const addProduct = () => {        
        let producto = prods.products.filter((e)=>e.id===id)[0]
        let productos = prods.products.filter((e)=>e.id!==id)
        
        /* Si la cantidad 0 o menor no entra a esta condicion y el producto se borra del array*/
        if (cantidad > 0) {
            /** Si type del objeto es 'Object' quiere decir que el producto existe, sino es uno nuevo en el array */
            if (typeof(producto) === 'object') {
                producto.cantidad = cantidad            
            } else {
                producto = {
                    id: id,
                    cantidad: cantidad,
                    desc: desc
                }
            }
            
            productos.push(producto)
        }

        prods.setProducts(productos)
    }

    const addCantidad = (ev) => {        
        setCantidad(ev.target.value)
    }

    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" className="img-sz" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <div className="d-flex gap-3 justify-content-center">
                        <Form>
                            <Form.Control className="cantidad-sz" type="number" min={0} onChange={addCantidad} value={cantidad}/>
                        </Form>
                        <Button variant="primary" onClick={()=>{addProduct()}}>Agregar</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;
