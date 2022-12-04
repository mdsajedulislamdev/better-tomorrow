import React from "react";
import style from "./Profit.module.css";
import image from "../../../src/images/hand.jpg";

const About = () => {
  return (
    <div className={style.profit}>
      <div className={style.profitContent}>
        <div>
          <h1 className={style.title}>
            WE ARE <span className={style.nonProfitText}>NONPROFIT</span> TEAM
          </h1>
          <p className={style.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate porro corporis totam temporibus aspernatur, beatae eligendi quia, optio perspiciatis et voluptates illum iure rerum
            odit veniam modi omnis assumenda nostrum facere aperiam! Ipsam esse placeat rem ad animi ex in doloribus, nostrum, sequi fugiat veniam obcaecati vero incidunt quam hic.
          </p>

          <div className={style.allPara}>
            <p className={style.para}>&#10217; 100 volunteers needed for this charity activity</p>
            <p className={style.para}>&#10217; 100 volunteers needed for this charity activity</p>
            <p className={style.para}>&#10217; 100 volunteers needed for this charity activity</p>
            <p className={style.para}>&#10217; 100 volunteers needed for this charity activity</p>
          </div>

          <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, corporis! Iste unde voluptate explicabo reiciendis odit corrupti ut harum at.</p>
          <button className={style.button}>JOIN NOW</button>
        </div>
        <div>
          <img className={style.image} src={image} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default About;
