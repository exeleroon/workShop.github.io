import "./App.css";
import React, { useEffect } from "react";
import {  Switch, useHistory, Route} from "react-router-dom";
import cart from "./svgIcons/cart.svg";
import star from "./svgIcons/unstar.svg";
import homeIcon from "./svgIcons/home.svg";
import Goods from "./Pages/Goods";
import Favorite from "./Pages/Favorite";
import CartGoods from "./Cart";
import Modal from "./Components/modal/Modal";
import Button from "./Components/buttons/BtnComponent";
import { loadGoods } from "./store/general/actions";
import { useSelector, useDispatch } from 'react-redux';
import { initialFavorites } from './store/favorites/actions';
import { initialCart, addToCartItem, removeFromCartId } from './store/cart/actions';
import { isModalAddToCartCloseModal, isModalCartRemoveItemClose } from "./store/general/actions";

const App = () => {
  const dispatch = useDispatch();
  const reduxAllGoods = useSelector((state) => state.general.products);
  const favFromRedux = useSelector((state) => state.favorites);
  const cartFromRedux = useSelector((state) => state.cart)
  const isModalAddToCartAction = useSelector((state) => state.general.isModalAddToCartOpen);
  const nearestCartId = useSelector((state) => state.general.closestId);
  const removeCartItemFromModal = useSelector((state) => state.general.isModalRemoveFromCart);

  useEffect(() => {
    dispatch(loadGoods());
    const favFromLocal = localStorage.getItem('favItems');
    const cartFromLocal = localStorage.getItem('cartItems');
    if(favFromLocal) {
      dispatch(initialFavorites(JSON.parse(favFromLocal)));
    }
    if(cartFromLocal) {
      dispatch(initialCart(JSON.parse(cartFromLocal)));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favItems', JSON.stringify(favFromRedux))
  }, [favFromRedux]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartFromRedux))
  }, [cartFromRedux]);


  const addToCart = () => {
    dispatch(addToCartItem(nearestCartId));
    dispatch(isModalAddToCartCloseModal());
  }


  const removeFromCartItem = () => {
    dispatch(removeFromCartId(nearestCartId));
    dispatch(isModalCartRemoveItemClose());
  };


  const handleModalCloseAddToCart = () => {
    dispatch(isModalAddToCartCloseModal());
  };

  const removeItemModalClose = () => {
    dispatch(isModalCartRemoveItemClose());
  }

  const cartActions = (
    <div>
      <Button
        toggleBtn={addToCart}
        bgColor={"rgba(0, 0, 0, 0.219)"}
        className={"modalBtn close"}
        text={"Add to cart"}
      />
      <Button
        toggleBtn={handleModalCloseAddToCart}
        bgColor={"rgba(0, 0, 0, 0.219)"}
        className={"modalBtn close"}
        text={"Cancel"}
      />
    </div>
  );

  const deleteCartActions = (
    <div>
      <Button
        toggleBtn={removeFromCartItem}
        bgColor={"rgba(0, 0, 0, 0.219)"}
        className={"modalBtn close"}
        text={"Delete"}
      />
      <Button
        toggleBtn={removeItemModalClose}
        bgColor={"rgba(0, 0, 0, 0.219)"}
        className={"modalBtn close"}
        text={"Cancel"}
      />
    </div>
  );

  const history = useHistory();

  const handleClick = (name) => {
    history.push(`${name}`);
  };

  const locationCart = "cart";
  const locationFavorite = "favorite";
  const home = "/";
  

  
  return (
    <>
      <button onClick={() => handleClick(home)} className="homeIcon">
        <img src={homeIcon}  alt="home icon"></img>
      </button>
      <button onClick={() => handleClick(locationCart)} className="btn-cart">
        {" "}
        <span className="cart-c">{cartFromRedux.length}</span>
        <img className="cart" src={cart} alt="cart"></img>
      </button>
      <button
        onClick={() => handleClick(locationFavorite)}
        className="btn-favorite"
      >
        {" "}
        <span className="fav-c">{favFromRedux.length}</span>
        <img className="favorite" src={star} alt="starfav"></img>
      </button>
      <Switch>
        <Route exact path="/">
          <Goods
            showGoods={reduxAllGoods}
          />
        </Route>
        <Route path="/cart">
          <CartGoods />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
      {isModalAddToCartAction && <Modal modalBtns={cartActions} closeModal={handleModalCloseAddToCart}
        header={'Adding to cart...'}
        text={`Do you want to add "${reduxAllGoods[nearestCartId].name.toUpperCase() } " in cart?`} />}
      {removeCartItemFromModal && <Modal  modalBtns={deleteCartActions} closeModal={removeItemModalClose}
        header={'Deleting from cart...'}
        text={`Do you want to delete "${reduxAllGoods[nearestCartId].name.toUpperCase()}" from cart?`}
      />}
    </>
  );
};

export default App;
