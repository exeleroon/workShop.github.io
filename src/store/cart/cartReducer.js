import { SET_CART, INITIAL_CART_ID, CART_PRODUCT_REMOVE, BUY_IMITATION} from './types';

const initialState = [];

const cartRootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_CART_ID: 
            return action.payload;
        case SET_CART: 
            const currentCartId = action.payload;
        if(state.length === 0) {
            return [currentCartId];
        } else {
            const existCart = state.find(
                (cartItems) => cartItems === currentCartId
            );
            if (existCart) {
                const newCartArr = state.filter(
                    (item) => item !== currentCartId
                );
                return newCartArr;
            } else {
                return [currentCartId, ...state];
            }
        }
        case CART_PRODUCT_REMOVE: 
            const clickedRemoveItemId = action.payload;
            if(state.length === 0) {
                return [...state];
            } else {
                const existRefreshCart = state.find(
                    (cartItems) => cartItems === clickedRemoveItemId
                );
                if (existRefreshCart) {
                    const refreshCartArr = state.filter(
                        (item) => item !== action.payload
                    );
                    return refreshCartArr;
                }
            }
        case BUY_IMITATION: 
            return state = []
        default: return state;
    }
};

export default cartRootReducer; 