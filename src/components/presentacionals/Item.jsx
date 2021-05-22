import React from 'react';


import './styles/Item.css';

const Item = (props) => {
    return (
        <article className="product-container">
            <div className="product__image-container">
                <img src={props.image} alt={`${props.name}`} />
            </div>
            <h3 className="product__name">{props.name}</h3>
        </article>
    )
}

export default Item
