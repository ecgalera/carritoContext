import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const CartContext = createContext([]);

export const useCartContext =()=>{
   return useContext(CartContext)
};



const CartProvider = ({children})=>{
    const [items, setItems] = useState([])
   

    
const agregarCarrito =(data)=>{
    const listaActual = items;
    listaActual.push(data)
    setItems(listaActual)
    
}

const removeItems=(itemId)=>{
    setItems(items.filter((e)=>e.id !== itemId))
}

const clear=()=>{
    setItems([])

}








    return (
        <CartContext.Provider value={{items, agregarCarrito, removeItems, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider