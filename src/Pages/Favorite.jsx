import "../App.css";
import React  from "react";
import Cards from "../Components/cards";
import { useSelector } from "react-redux";


const Favorite = () => {
  const favoritesContentId = useSelector((state) => state.favorites);
  const allGoods = useSelector((state) => state.general.products);
  const isLoading = useSelector((state) => state.general.isLoading);

  const favProducts = [];

  favoritesContentId.forEach((id) => {
    const targetFav = allGoods.find((item) => item.id === id);
    favProducts.push(targetFav);
  })
  
  return (
    <div className="cards">
      {favProducts.length === 0 || isLoading ? (
        <p>NO FAVORITES</p>
      ) : (
        favProducts.map((product) => (
          <Cards
            product={product}
            key={product.id}
          />
        ))
      )}
    </div>
  );
};

export default Favorite;
