import React from "react";
import PropTypes from "prop-types";
import star from "../svgIcons/star.svg";
import unStar from "../svgIcons/unstar.svg";
import { useDispatch, useSelector } from 'react-redux';
import { handleFavorite } from '../store/favorites/actions';
import { isModalAddToCart } from "../store/general/actions";


const Cards = ({ product }) => {
  let { name, price, src, article, color, dataFav, closeBtn, id } = product;

  const dispatch = useDispatch();
  const favoriteArrayId = useSelector(state => state.favorites);
  const isFavorite = favoriteArrayId.some(elem => elem === id);

  if (closeBtn) {
    closeBtn = "X";
  }

  const handleIsFavorite = () => {
    dispatch(handleFavorite(id));
  }

  const isModalAddToCartOpen = () => {
    dispatch(isModalAddToCart(id));
  }

  

  return (
    <div className="card-container" data-x={dataFav}>
      <span className="star">
        <img
          className="starClick"
          onClick={handleIsFavorite}
          src={isFavorite ? unStar : star} alt="favIcon"
        ></img>
      </span>
      <img src={src} alt='img'></img>
      <h5 className="card-title">{name}</h5>
      <span className="list-group-item">Article: {article}</span>
      <span className="list-group-item">Color: {color}</span>
      <div className="card-footer">
        <span>${price}</span>
        <button
          onClick={() => {isModalAddToCartOpen(id)}}
          className="btn-primary btn"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

Cards.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  src: PropTypes.string,
  article: PropTypes.string,
  color: PropTypes.string,
  dataFav: PropTypes.number,
};

export default Cards;
