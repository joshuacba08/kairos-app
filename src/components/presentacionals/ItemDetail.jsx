import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';

import './styles/ItemDetail.css';

const ItemDetail = ({item}) => {

    const cartContext = useContext(CartContext);
    const { cart, addToCart, limitStock, setLimitStock } = cartContext;

    const [show, setShow] = useState(false);

    const onAdd = (id, qty) => {

        addToCart({
            id: id,
            qty: qty,});

        setShow(!show);

    }
    console.log(show);
    console.log(cart);

    return (
        <div className="item-detail-container">
            <div className="item-detail-container__img">
                <img src={item.image} alt="imagen del producto en oferta" />
            </div>
            <article className="item-detail-container__detail">
                <h2 className="product-name">{item.name}</h2>
                <span className="price">${item.price}</span>
                <p className="product-description">{item.description}</p>
                { !show && <ItemCount
                    item={item}
                    initial={1}
                    onAdd = {onAdd}
                />}
                { show && <Link to="/cart"><button className="to-cart">Finalizar compra</button></Link>}
            </article>
        </div>
    )
}

export default ItemDetail
