import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';


import './styles/Item.css';

const Item = (props) => {

    console.log(props.itemID);
    return (
        <article className="product-container">
            <div className="product__image-container">
                <img src={props.image} alt={`${props.name}`} />
            </div>
            <Link to={`/detail/${props.itemID}`}>
                <h6 className="product__name">{props.name}</h6>
            </Link>
            <p className="product__price">${ props.price }</p>
            <div className="product__counter-container">
                <ItemCount
                    initial={1}
                    stock={props.stock}
                />
            </div>
        </article>
    )
}

export default Item
