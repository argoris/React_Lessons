import React from "react";
import style from "./Menu.css";

const Menu = ({ menuItems }) => {
  return (
    <div className={"menu"}>
      {
        (menuItems.map (value => <a className={'menu-item'} key={value} href={"/${value}"}>{value.toUpperCase()}</a>
        ))
      }
    </div>
  );
};

export default Menu;
