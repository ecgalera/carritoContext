import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartProvider from '../../context/CartContext'
import CartItems from './CartItems'

const CartList = () => {

  const {items, removeItems, clear} = useCartContext(CartProvider)
  
   const tot = items.reduce((acumulador, valorActual)=> acumulador + valorActual.price * valorActual.cantidad, 0)

  return (

      <>
     
      {items.map((e)=>(<CartItems title={e.title} price={e.price} cantidad={e.cantidad} image={e.image} removeItems={removeItems} id={e.id}/>))}
    
      <h3>Suma total: {tot}</h3>
      <button onClick={clear}>Vaciar Carrito</button>
      </>

  )
}

export default CartList