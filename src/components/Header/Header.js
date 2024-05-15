import React from "react";
import "./Header.css";
import GroupImage from "../../assets/Group.png";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div>
      <div className={"header-block"}>
        <div className={"header-title--block"}>
          <h1 className={"header-title"}>Yummy Recipes</h1>
          <p className={"header-description"}>
            we have a lot of yummy recipes from all aruond the world.
          </p>
          <Button />
        </div>
        <img className={"header-img"} src={GroupImage} alt="Image_header" />
      </div>
    </div>
  );
};

export default Header;
