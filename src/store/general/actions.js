import * as type from './types';
import getGoods from "../../Api/goodsItems"

export const loadGoods = () => (dispatch) => {
    dispatch({ type: type.LOADING_PRODUCTS, payload: true });
    getGoods().then((res) => {
        dispatch({ type: type.SAVE_PRODUCTS, payload: res });
        dispatch({ type: type.LOADING_PRODUCTS, payload: false });
    });
};

export const isModalAddToCart = (id) => ({
    type: type.IS_MODAL_ADD_TO_CART_OPEN,
    payload: id,
}) 

export const isModalAddToCartCloseModal = () => ({
    type: type.IS_MODAL_ADD_TO_CART_CLOSE,
})

export const isModalCartRemoveItem = (id) => ({
    type: type.IS_MODAL_REMOVE_FROM_CART,
    payload: id
})

export const isModalCartRemoveItemClose = () => ({
    type: type.IS_MODAL_REMOVE_FROM_CART_CLOSE
})

export const confirmBuy = () => ({
    type: type.TO_BUY
})

export const closeModalToBuy = () => ({
    type: type.CLOSE_TO_BUY_MODAL
})

export const buyerInfo = (info) => ({
    type: type.BUYER_INFO,
    payload: info
})