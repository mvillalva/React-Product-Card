import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import logo1 from "../../img/cosmetico.jpg";
import logo2 from "../../img/producto2.jpg";
import logo3 from "../../img/producto3.jpg";
import {IoAddCircle, IoTrash} from 'react-icons/io5'
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
                    nombre: name,
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
                <Card.Img variant="top" className="img-sz" src={id%3 === 0?logo3:id%2===0?logo2:logo1} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <div className="d-flex gap-3 justify-content-center">
                        <Form>
                            <Form.Control className="cantidad-sz" type="number" min={0} onChange={addCantidad} value={cantidad}/>
                        </Form>
                        <Button variant={cantidad == 0?"danger":"primary"} onClick={()=>{addProduct()}}>{cantidad == 0? <IoTrash className="fs-5" /> :<IoAddCircle className="fs-5" />}</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;
