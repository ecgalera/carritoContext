import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import ItemCount from "../itemCount/ItemCount"
import "../itemDetail/ItemDetail.css"
import { useCartContext} from '../../context/CartContext'
import {useState, } from "react"


const ItemDetail = (props) => {

    const { title, id, price, category, image } = props.data

    const [cantidad, setCantidad] = useState(0)

    const tomarCatidad =(numero)=>{
      setCantidad(numero)
    }

    const {agregarCarrito} = useCartContext()
   
    const onAdd = () => {
      if(cantidad === 0){
        alert("Agregue un producto al carrito")
      }else{
      const producto={
        id:id,
        title:title,
        price:price,
        cantidad:cantidad,
        image:image

      }
    agregarCarrito(producto)}
  }

  

  return (

 
    <div>
    
     <Link style={{ fontWeight:"bolder", textDecorationLine:"none"}} className={"link"} to="/product"> Regresar a Productos</Link>

      <Container className='container'>
        <Card style={{ width: '30rem' }} className='altura'>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>Id: {id}</Card.Title>
            <Card.Title>Precio: {price}</Card.Title>
            <Card.Title>Categoria: {category}</Card.Title>
            
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           {/* <Link to={`/product/${id}`}>Ver Detalle del Producto</Link> */}
           <ItemCount stock={10} cantidad={tomarCatidad}/>
           <div>
                <button onClick={onAdd}>Agregar al Carrito</button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )





 
  
}

export default ItemDetail

