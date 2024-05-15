import React from "react";
import "./ProductCard.css";

const ProductCard = ({ obj }) => {
  const { photo, title, description } = obj;

  return (
    <div className="product-card">
      <img className="img-product--card" src={photo} alt={title} />
      <h3 className="title-pc">{title}</h3>
      <p className="description-pc">{description}</p>
    </div>
  );
};

export default ProductCard;
