import React from 'react';
import ItemList from './ItemList';

import "./styles/ItemListContainer.css";

const ItemListContainer = () => {
    return (
        <div className="item-list-container">
            <h2>Productos Destacados</h2>
            <p>Conocé nuestros productos destacados</p>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
