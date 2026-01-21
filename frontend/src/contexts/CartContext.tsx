import {createContext, type ReactNode, useState} from "react";
import type Product from "../models/Product.ts";

interface CartContextType {
    products: Product[];
    insertInToCart: (product: Product) => void;
    cart: string;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({children}: CartProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);

    function insertInToCart(product: Product) {
        let arrayProducts: Product[] = [];

        const dataLocalStorage = localStorage.getItem('@CART');
        if (dataLocalStorage) {
            const data: Product[] = JSON.parse(dataLocalStorage);
            arrayProducts = [...data];
        }

        arrayProducts.push(product);
        localStorage.setItem('@CART', JSON.stringify(arrayProducts));

        setProducts([...products, product]);
        console.log('CONTEXT', product);
    }

    return (
        <CartContext.Provider value={{insertInToCart, cart: 'cart', products}}>
            {children}
        </CartContext.Provider>
    );
}
