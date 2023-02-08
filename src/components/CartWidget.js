import React from 'react'
import { useCartContext } from '../context/CartContext'
import CartProvider from '../context/CartContext'



const CartWidget = () => {

const {items}=useCartContext(CartProvider)



  return (
    <>
    <button className="nav-toggle-carrito">
    <img src="/image/cart.png" width={30}  className="nav-menu-img"/><span>{items.reduce((acumulador, valorActual)=> acumulador + valorActual.cantidad,0)}</span>
    </button>
    
    </>
  )
}

export default CartWidget                                                                                                                                                                                                                               