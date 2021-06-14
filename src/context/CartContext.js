import {createContext, useEffect, useState} from 'react';
import { getAllProducts } from '../helpers/searchFunctions';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart ] = useState([]);
    const [products, setProducts] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [limitStock, setLimitStock] = useState(false);

    const addToCart = ( item ) => {

        setCart([...cart, item ]);
    }

    useEffect(() => {
        setProducts(getAllProducts());
    }, [cart, subTotal])

    return (
        <CartContext.Provider

            value={{
                cart,
                setCart,
                products,
                subTotal,
                addToCart,
                // deleteFromCart,
                limitStock,
                setLimitStock,
            }}

        >
            { children}

        </CartContext.Provider>
    );
};

export default CartContextProvider;
