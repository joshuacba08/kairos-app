import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

import './styles/ItemDetail.css';

const ItemDetail = ({item}) => {

    const [products, setProducts] = useState(null);

    const onAdd = (qty) => {

        setProducts({
            id: item.itemID,
            qty: qty,
        });

    }

    console.log(products);

    return (
        <div className="item-detail-container">
            <div className="item-detail-container__img">
                <img src={item.image} alt="imagen del producto en oferta" />
            </div>
            <article className="item-detail-container__detail">
                <h2 className="product-name">{item.name}</h2>
                <span className="price">${item.price}</span>
                <p className="product-description">{item.description}</p>
                {!products && <ItemCount
                    item={item}
                    initial={1}
                    onAdd = {onAdd}
                />}
                {products && <Link to="/cart"><button>Finalizar compra</button></Link>}
            </article>
        </div>
    )
}

export default ItemDetail
