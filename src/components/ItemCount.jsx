import React, { useState } from 'react'

import './styles/ItemCount.css'

const ItemCount = ({ initial, stock }) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleSubtract = () => {
        setCount(count - 1);
    }

    return (
        <div className="item-count-main">
            <div className="count-container">
                <button onClick={handleSubtract} disabled={count === 1 && 'disabled'}>-</button>
                <span className="count-container__number">{count}</span>
                <button onClick={handleAdd} disabled={count === stock && 'disabled'}>+</button>
            </div>
        </div>
    )
}

export default ItemCount
