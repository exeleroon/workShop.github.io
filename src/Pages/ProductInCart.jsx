import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { isModalCartRemoveItem } from "../store/general/actions";


const GoodsOfCart = ({ product }) => {
  let { name, price, src, article, color, dataFav, closeBtn, id } = product;
  
  if (closeBtn) {
    closeBtn = "X";
  }
  const dispatch = useDispatch();

  const openModalToRemove = () => {
    dispatch(isModalCartRemoveItem(id));
  }

  return (
    <div className="card-container" data-x={dataFav}>
      <span className="removeFromCart">{closeBtn}</span>
      <img src={src} alt='star'></img>
      <h5 className="card-title">{name}</h5>
      <span className="list-group-item">Article: {article}</span>
      <span className="list-group-item">Color: {color}</span>
      <div className="card-footer">
        <span>${price}</span>
        <button
          onClick={() => openModalToRemove(id)}
          className="btn-primary btn">
          Delete from cart
        </button>
      </div>    
    </div>
  );
};

GoodsOfCart.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  src: PropTypes.string,
  article: PropTypes.string,
  color: PropTypes.string,
  dataFav: PropTypes.number,
};

export default GoodsOfCart;
