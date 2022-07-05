import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}
export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    

    const isInCart = (id) => {
        return cart.some((x) => x.id ===  id);
    };

    const addItem = (newItem) => {
        if (isInCart(newItem.id)) {
            const findProduct = cart.find((x) => x.id === newItem.id);
            const productIndex = cart.indexOF(findProduct);
            const auxArray = [...cart];
            auxArray[productIndex].qty += newItem.qty;
            setCart(auxArray);
        } else {
            setCart([...cart, newItem]);
        }
    };

    const emptyCart = () => {
        setCart([]);
    };

    const deleteItem = (id) => {
        return setCart(cart.filter((x) => x.id !== id));
    };

    const getItemQty = () => {
        return cart.reduce((acc, x) => (acc += x.qty), 0);
    };

    const getItemPrice = () => {
        return cart.reduce((acc, x) => (acc += x.qty * x.price), 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                isInCart,
                addItem,
                deleteItem,
                emptyCart,
                getItemQty,
                getItemPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
