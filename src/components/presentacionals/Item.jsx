import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';


import './styles/Item.css';

const Item = ({ item }) => {

    const cartContext = useContext(CartContext);
    const { cart, addToCart, limitStock, setLimitStock } = cartContext;

    const [show, setShow] = useState(false);

    const onAdd = (id, qty) => {

        addToCart({
            id: id,
            qty: qty,
        });

        setShow(!show);
    }

    return (
        <article className="product-container">
            <div className="product__image-container">
                <img src={item.image} alt={`${item.name}`} />
            </div>
            <Link to={`/detail/${item.itemID}`}>
                <h6 className="product__name">{item.name}</h6>
            </Link>
            <p className="product__price">${ item.price }</p>
            <div className="product__counter-container">
                {!show && <ItemCount
                    item={item}
                    initial={1}
                    onAdd={onAdd}
                />}
                {show && <Link to="/cart"><button className="to-cart">Finalizar compra</button></Link>}
            </div>
        </article>
    )
}

export default Item
