import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import generalReducer from './general/rootReducer';
import thunk from 'redux-thunk';
import favoriteReducer from './favorites/favReducer';
import cartReducer from './cart/cartReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const rootReducer = combineReducers({
    general: generalReducer,
    favorites: favoriteReducer,
    cart: cartReducer,
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), devTools)  
);

export default store;
