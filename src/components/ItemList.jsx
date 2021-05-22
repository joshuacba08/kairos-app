import React, { useEffect, useState } from 'react';
import Item from '../components/presentacionals/Item';
import productList from '../data/productos';

import './styles/ItemList.css'

const ItemList = () => {

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    })

    const getProductsFromDB = async () => {
        try {
            const result = await getProducts;
            setProducts(result);
        } catch (error) {
            alert('No podemos mostrar los productos en este momento')
        }
    }

    useEffect(() => {
        getProductsFromDB();
    }, [])

    return (
        <div className="product-list-container">
            {
                products.length ?
                    <>
                        {
                            products.map((product) => {
                                return <div key={product.itemID}>
                                    <Item 
                                        image = { product.image }
                                        name = { product.name }
                                        price = { product.price }
                                        stock = { product.stock }
                                    />
                                </div>
                            })
                        }
                    </>
                    :
                    <p>Cargando productos...</p>
            }

        </div>
    )
}

export default ItemList
