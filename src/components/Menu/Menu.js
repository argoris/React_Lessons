import React from "react";
import "./Menu.css";

const Menu = ({ menuItems, type }) => {
  return (
    <div>
      <div className={"containers"}>
        <nav id="navbar">
          <div className={"Logo-wrapper"}>
            <a className={"logo-link"} href={"Recipe"}>
              Recipe
            </a>
          </div>
          <ul className={"nav-menu"}>
            <li className={"nav-menu--item"}>
              <a className={"nav-link--item"} href={menuItems[0]}>
                {menuItems[0]}
              </a>
            </li>
            <li className={"nav-menu--item"}>
              <a className={"nav-link--item"} href={menuItems[1]}>
                {menuItems[1]}
              </a>
            </li>
            <li className={"nav-menu--item"}>
              <a className={"nav-link--item"} href={menuItems[2]}>
                {menuItems[2]}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
