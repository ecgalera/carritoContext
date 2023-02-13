import React from 'react'
import { useState } from "react"
import { Container } from 'react-bootstrap'
import "../itemCount/ItemCount.css"

const ItemCount = (props) => {

    const [count, setCount] = useState(0)

    const addOne = () => {
        if (count < props.stock) {
            setCount(count + 1)
           }
           props.cantidad(count+1)
    }

    const disOne = () => {
        if (count > 0) {
            setCount(count - 1)
            props.cantidad(count-1)
        }
    }

   

    return (
        <div>
            <Container className='itemcount'>
                <div>
                    <button onClick={addOne}>+</button>
                </div>
                <p>{count}</p>
                <div>
                    <button onClick={disOne}>-</button>
                </div>
            </Container>
           




        </div>
    )
}

export default ItemCount