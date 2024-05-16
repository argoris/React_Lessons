import React from "react";
import "./ProductCard.css";

const ProductCard = ({ obj }) => {
  const { photo, title, description, link } = obj;

  return (
    <a className={"product-card--link"} href={link}>
      <div className="product-card">
        <img className="img-product--card" src={photo} alt={title} />
        <h3 className="title-pc">{title}</h3>
        <p className="description-pc">{description}</p>
      </div>
    </a>
  );
};

export default ProductCard;
