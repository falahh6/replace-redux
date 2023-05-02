import React, { useContext } from "react";
import { ProductContext } from "../../contextAPI/products-context";
import useStore from "../../store-hook/store";

import Card from "../UI/Card";
import "./ProductItem.css";
// import { toggleFav } from "../../store/actions/products";

const ProductItem = (props) => {
  // const productList = useContext(ProductContext).products;
  const dispatch = useStore()[1];
  // const toggleFav = useContext(ProductContext).toggleFav;
  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
