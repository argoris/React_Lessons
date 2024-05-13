import React from "react";
import moduleStyle from "./Title.module.css";
import mS from "./Title.module.css";
import "./Title.css";

const Title = () => {
  return (
    <div>
      <h2 className={`${moduleStyle.title} ${moduleStyle.titleSize7}`}>
        Title
      </h2>
      <p className={"title title-bg--red"}>lorem502</p>
      <h3 className={moduleStyle.titleMode}>lorem502 lorem</h3>
      <span className={"title-"}>Invert</span>
      <p className={"title"}>icon icon icon</p>
      <p className={"a-titleA-D"}>icon icon icon</p>
      <p className={"titleB titleC"}>icon icon icon icon</p>
    </div>
  );
};

// const Title = () => {
//   return (
//     <div>
//       <h2>
//         <a className={"style1 style2"} href="#">
//           Title
//         </a>
//         <p className={"style2"}>
//          lorem502. Lorem ipsum dolor sit amet, consectet
//         </p>
//       </h2>
//       <h2>
//         <a className={mS.title} href="#">
//           Title
//         </a>
//       </h2>
//       <h2 className={`${mS.title} ${mS.titlesize17}`}>
//         <a className={`${mS.title} ${mS.titlesize17}`} href="#">
//           Title
//         </a>
//       </h2>
//       <p className={"eeestyles-"}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do P
//       </p>
//       <span className={"styles-"}>lorem span</span>
//       <p className={"styles"}>lorem ips</p>
//       <div className={"styles"}>
//           lorem ipsum <a href="#">dolor sit</a> amet, consectetur adip
//       </div>
//     </div>
//   );
// };

export default Title;
