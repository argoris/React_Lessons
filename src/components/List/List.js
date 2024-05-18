import React from "react";
import "./List.css";

const List = ({ item }) => {
  const { imgUrl, nameOne, nameTwo, nameThree, showDetails } = item;
  return (
    <div className={"list-card"}>
      <img className={"list-img"} src={imgUrl} alt={`${item} + photo`} />
      <div className={"list-name--box"}>
        <div className="list-name--block">
          <p className={"list-name"}>{nameOne}</p>
          <p className={"list-name"}>{nameTwo}</p>
        </div>
        <p className={"list-name--big"}>{nameThree}</p>
      </div>
      <div className={"show-link--wrapper"}>
        <a className={"show-link"} href={showDetails}>
          {showDetails}
        </a>
      </div>
    </div>
  );
};

export default List;
