import React, { useState } from 'react'

import './styles/ItemCount.css'

const ItemCount = ({ item, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleSubtract = () => {
        setCount(count - 1);
    }

    const addToCart = () => {
        onAdd(item.itemID, count);
    }

    return (
        <div className="item-count-main">
            <div className="count-container">
                <button onClick={handleSubtract} disabled={count === 1 && 'disabled'}>-</button>
                <span className="count-container__number">{count}</span>
                <button onClick={handleAdd} disabled={count === item.stock && 'disabled'}>+</button>
            </div>
            <button className="add-to-cart" onClick={addToCart}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount
