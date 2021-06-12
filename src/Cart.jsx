import "./App.css";
import React from "react";
import ProductInCart from "./Pages/ProductInCart";
import { useSelector, useDispatch } from "react-redux";
import FormikModal from './Pages/controlesFormik';
import { confirmBuy, closeModalToBuy } from './store/general/actions';


const CartGoods = () => {
  const cartContentId = useSelector((state) => state.cart);
  const totalGoods = useSelector((state) => state.general.products);
  const isLoadingCartItems = useSelector((state) => state.general.isLoading);
  const tuBuyAction = useSelector((state) => state.general.toBuyModal);
  const dispatch = useDispatch();

  const inCartProducts = [];

  cartContentId.forEach((id) => {
    const targetCart = totalGoods.find((item) => item.id === id);
    inCartProducts.push(targetCart);
  })

  const boughtItems = () => {
    if(!isLoadingCartItems) {
      const test = inCartProducts.map((item) => {
        return item.name
      })
      return console.log('Thanks you bought =>', test.toString());
    }
  }

  
  const handleToBuy = () => {
    dispatch(confirmBuy());
  }

  const handleCloseModalToBuy = () => {
    dispatch(closeModalToBuy());
  }


  return (
    <>
      <div className="cards">
        {inCartProducts.length === 0 || isLoadingCartItems ? (
          <p>Products is loading ...</p>
        ) : (
          inCartProducts.map((product) => (
            <ProductInCart
              product={product}
              key={product.id}
            />
          ))
        )}
      </div>
      {tuBuyAction && <FormikModal boughtGoods={boughtItems} header={'test'} text="asd" closeModal={handleCloseModalToBuy} />}
      {inCartProducts.length !== 0 && <button onClick={() => handleToBuy()} className="btn-primary confirm">To order</button>}
    </>
  );
};

export default CartGoods;
