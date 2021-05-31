import React, { useEffect, useState } from 'react';
import { getProductById } from '../helpers/searchFunctions';
import ItemDetail from './presentacionals/ItemDetail';

import './styles/ItemDetailContainer.css'

const ItemDetailContainer = ({ idItem }) => {

    //declaro un useState en cual albergará el producto que traeré mediante la función de búsqueda usando el método find de los arrays. 
    const [product, setProduct] = useState(null);

    const getItems = (condition) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = getProductById(condition); //getProductById está en una carpeta llamada helpers, la cual me ayuda a dejar más limpio el código.
                resolve(result);
                console.log(result);
            }, 2000);
        });
    }

    

    useEffect(() => {
        getItems(idItem).then(response => setProduct(response));
    }, [idItem])

    return (
        <>  {
            product ?
                <>
                    <ItemDetail item={product} />
                </> 
                    :
                    <p className="loading">Cargando producto</p>
        }
        </>
    )
}

export default ItemDetailContainer
