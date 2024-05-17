import React from "react";
import style from "./RecipeCard.css";

const RecipeCard = ({ item }) => {
  const { name, description, imgUrl } = item;
  return (
    <div className={'recipe-card'}>
      <img className={'recipe-card--img'} src={imgUrl} alt={`${name} photo`} />
      <h3 className={'recipe-card--name'}>{name}</h3>
      <p className={'recipe-card--description'}>{description}</p>
    </div>
  );
};

export default RecipeCard;
