import React from "react";
import Profit from "../Profit/Profit";
import style from "./Home.module.css";
import image from "../../../src/images/group_img.png";
import Providing from "../Providing/Providing";
import Help from "../Help/Help";
import Think from "../Think/Think";
import Causes from "../Causes/Causes";
import Gallery from "../Gallery/Gallery";
import News from "../News/News";

const Home = () => {
  return (
    <div className={style.homeDiv}>
      <div className={style.contentDiv}>
        <h1 className={style.topTitle}>BELIEVE IN TOMORROW</h1>
        <h4 className={style.bottomTitle}>NONPROFITED CHARITY ORGANIZATION</h4>
        <h5 className={style.lastTitle}>
          Join over 10 million people supporting charity and <br />
          personal causes
        </h5>
        <button className={style.button}>Make Donation</button>
      </div>
      <img className={style.image} src={image} alt="avatar" />

      {/* ==============Component========================== */}
      <Profit></Profit>
      <Providing></Providing>
      <Help></Help>
      <Think></Think>
      <Causes></Causes>
      <Gallery></Gallery>
      <News></News>
    </div>
  );
};

export default Home;
