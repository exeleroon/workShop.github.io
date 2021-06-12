import * as type from './types';

export const initialCart = (cartFromLocal) => ({
    type: type.INITIAL_CART_ID,
    payload: cartFromLocal
})

export const addToCartItem = (id) => ({
    type: type.SET_CART,
    payload: id
})

export const removeFromCartId = (id) => ({
    type: type.CART_PRODUCT_REMOVE,
    payload: id
})

export const buyImitation = () => ({
    type: type.BUY_IMITATION
})



