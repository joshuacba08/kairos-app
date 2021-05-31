import React from 'react';
import ItemCount from '../ItemCount';

import './styles/ItemDetail.css';

const ItemDetail = ({item}) => {

    return (
        <div className="item-detail-container">
            <div className="item-detail-container__img">
                <img src={item.image} alt="imagen del producto en oferta" />
            </div>
            <article className="item-detail-container__detail">
                <h2 className="product-name">{item.name}</h2>
                <span className="price">${item.price}</span>
                <p className="product-description">{item.description}</p>
                <ItemCount
                    stock={item.stock}
                    initial={1}
                />
            </article>
        </div>
    )
}

export default ItemDetail
