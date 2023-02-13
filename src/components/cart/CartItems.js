import React from 'react'







const CartItems = ({title, price, cantidad, image, removeItems, id}) => {

  return (

    <div>{image} {title} {price} {cantidad} <button onClick={()=>removeItems(id)}>RemoveItems</button> </div>
  )
}

export default CartItems