import React from 'react'
import { useCartContext} from '../context/CartContext'
import CartProvider from '../context/CartContext'
// import { useState, useEffect } from 'react'


const CartWidget = () => {

const {getTotalProducts}=useCartContext(CartProvider)

// const [valor, setValor]=useState(0)


//   useEffect(() => {
    
    
//     const cambio = items.reduce((acumulador, valorActual)=>{ return acumulador+ valorActual.cantidad},0)
//     setValor(cambio)
//     return console.log(valor);
   
//   },[valor, items])
  

 


   
 
  return (
    <>
    <button className="nav-toggle-carrito">
    <img src="/image/cart.png" width={30}  className="nav-menu-img"/><span>{getTotalProducts()}</span>
    </button>
    
    </>
  )
}

export default CartWidget                                                                                                                                                                                                                               