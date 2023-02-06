import React from 'react'
import Item from '../item/Item'
import { useState, useEffect } from 'react'
import "./ItemList.css"
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ItemList = () => {

  // const {category}=props.data
  
  const [product, setProduct] = useState([])
 
 const {categoryId} = useParams()

  useEffect(() => {

    if(categoryId!= null){

      fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
  .then(res => res.json())
  .then(json => setProduct(json.map(product => <Item key={product.id} id={"product" + product.id} data={product} />)))

    }else{

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json.map(product => <Item key={product.id} id={"product" + product.id} data={product} />)))

    }

  },[])

  
  return (

    <div>
    <div className='button'>
    <h3>Seleccione por Categoría</h3>
    <Link style={{ fontWeight:"bolder", textDecorationLine:"none"}} to="/product">Haga click aquí para cambiar de categoria</Link>

    <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none"}} to={'/categoria/jewelery'}>Joyeria</Link></li>
    <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none"}}to={'/categoria/electronics'}>Electronica</Link></li>
    <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none"}}to={"/categoria/men's clothing"}>Ropa de Hombre</Link></li>
    <li><Link style={{ fontWeight:"bolder", textDecorationLine:"none"}}to={"/categoria/women's clothing"}>Ropa de Mujer</Link></li>
    </div>

    
    
    <Container className='itemlist'>
      <div className='row'>
        <div className='producto'>
          <div className="card-group mt-3">
            {product}
          </div>
        </div>
      </div>
    </Container>
    </div>

  )
}

export default ItemList