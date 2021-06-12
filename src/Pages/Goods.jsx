import "../App.css";
import React from "react";
import Cards from "../Components/cards";

const Goods = ({ showGoods }) => {
  const cards = showGoods.map((product) => {
    return (
      <Cards
        product={product}
        key={product.id}
      />
    );
  });

  return (
    <>
      <div className="cards">{cards}</div>
    </>
  );
};

export default Goods;
