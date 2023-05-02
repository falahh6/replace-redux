import React, { useContext } from "react";
import { ProductContext } from "../../contextAPI/products-context";

import Card from "../UI/Card";
import "./ProductItem.css";
// import { toggleFav } from "../../store/actions/products";

const ProductItem = (props) => {
  // const productList = useContext(ProductContext).products;
  const toggleFav = useContext(ProductContext).toggleFav;
  const toggleFavHandler = () => {
    toggleFav(props.id);
    console.log(`added ${props.id} to fave`);
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
