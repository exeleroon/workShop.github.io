import { IS_MODAL_ADD_TO_CART_OPEN, CLOSE_TO_BUY_MODAL, BUYER_INFO, TO_BUY, LOADING_PRODUCTS, IS_MODAL_REMOVE_FROM_CART_CLOSE, IS_LOADING, SAVE_PRODUCTS, IS_MODAL_ADD_TO_CART_CLOSE, IS_MODAL_REMOVE_FROM_CART } from './types'

const initialState = {
    isLoading: false,
    products: [],
    isModalAddToCartOpen: false,
    closestId: [],
    isModalRemoveFromCart: false,
    toBuyModal: false,
    buyerInformation: [],
};

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_PRODUCTS:
            return { ...state, isLoading: action.payload };
        case SAVE_PRODUCTS:
            return { ...state, products: action.payload };
        case IS_MODAL_ADD_TO_CART_OPEN:
            return { ...state, isModalAddToCartOpen: true, closestId: action.payload};
        case IS_MODAL_ADD_TO_CART_CLOSE:
            return { ...state, isModalAddToCartOpen: false}; 
        case IS_MODAL_REMOVE_FROM_CART:
            return { ...state, isModalRemoveFromCart: true, closestId: action.payload};
        case IS_MODAL_REMOVE_FROM_CART_CLOSE:
            return { ...state, isModalRemoveFromCart: false };
        case TO_BUY:
            return { ...state, toBuyModal: true };
        case CLOSE_TO_BUY_MODAL:
            return { ...state, toBuyModal: false };
        case BUYER_INFO: 
                return {...state, buyerInformation: action.payload };
        default: return state;
    }
}

export default generalReducer;