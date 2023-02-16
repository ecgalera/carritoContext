// import React from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useEffect, useState } from 'react'
// import "../itemDetailContainer/ItemDetailContainer.css"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const {productoId}= useParams()
    const [productos, setProductos]=useState([])

    useEffect(()=>{

            fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json())
            .then(productos=>setProductos(<ItemDetail key={productos.id} id={"productos" + productos.id} data={productos} />))
        
    },[productoId] )



  return (
    <div className='itemDetailContainer'>
    {productos}
    </div>
  )
}

export default ItemDetailContainer