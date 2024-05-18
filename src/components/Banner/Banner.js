import React from "react";
import style from './Banner.css';
import bannerPhoto from "../../assets/Group.png";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

const Banner = () => {
  return (
    <div className={"banner"}>
      <div className={'banner-content'}>
        <Typography type={"title"}>Yummi Recipes</Typography>
        <Typography type={"text"}>Yummi Recipes ghfhfg fthtjtyj rtetrt eytryrty yty ry te eyeyyer yhjvjlv.</Typography>
        <Button>See Recipes</Button>
      </div>
      <img className={'banner-img'} src={bannerPhoto} alt="" />
    </div>
  );
};

export default Banner;
