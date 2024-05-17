import React from "react";
import style from "./Header.css";
import Title from "../Title/Title";
import Menu from "../Menu/Menu";

const menuItems = ["home", "list", "search"];

const Header = () => {
  return (
    <div className={"header"}>
      <Title title={"Recipe"} />
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default Header;
