import React from "react";
import style from "./Home.module.css";
import oldMan from "../../../src/images/oldMan.jpg";
import children1 from "../../../src/images/topBannerImage.jpg";
import Providing from "../Providing/Providing";
import Help from "../Help/Help";
import Think from "../Think/Think";
import Causes from "../Causes/Causes";
import Gallery from "../Gallery/Gallery";
import News from "../News/News";
import RecentNews from "../RecentNews/RecentNews";

const Home = () => {
  return (
    <div className={style.homeDiv}>
      <div className={style.AllCarouselContents}>
        <div className={style.ContentDivOne}>
          <div className={style.firstCarouselContents}>
            <h1 className={style.firstCarouselTopTitle}>DONATE</h1>
            <h4 className={style.firstCarouselBottomTitle}>
              FOR POOR PEOPLE <br /> WORLDWIDE
            </h4>
            <h5 className={style.firstCarouselLastTitle}>
              <a href="#">Join over 10 million people supporting charity</a>
            </h5>
            <button className={style.FirstButton}>
              <a href="/donate">Make Donation</a>
            </button>
          </div>
          <div className={style.imageDiv}>
            <img className={style.image} src={oldMan} alt="avatar" />
          </div>
        </div>
        <div className={style.ContentDivTwo}>
          <div className={style.secondCarouselContents}>
            <h1 className={style.secondCarouselTopTitle}>RAISE YOUR HAND</h1>
            <h4 className={style.secondCarouselBottomTitle}>FOR POOR PEOPLE WORLDWIDE</h4>
            <h5 className={style.secondCarouselLastTitle}>
              <a href="#">Join over 12 million people supporting charity</a>
            </h5>
            <button className={style.SecondButton}>
              <a href="/donate">Make Donation</a>
            </button>
          </div>
          <div className={style.imageDiv}>
            <img className={style.image} src={children1} alt="avatar" />
          </div>
        </div>
      </div>

      {/* ==============Components========================== */}
      <RecentNews></RecentNews>
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
