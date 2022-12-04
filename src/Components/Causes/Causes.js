import React from "react";
import style from "./Causes.module.css";
import imgOne from "../../../src/images/imgOne.jpg";
import imgTwo from "../../../src/images/imgTwo.jpg";
import imgThree from "../../../src/images/imgThree.jpg";
import imgFour from "../../../src/images/imgFour.jpg";

const Causes = () => {
  return (
    <div className={style.causesMainDiv}>
      <div>
        <h1 className={style.topTitle}>
          Our <span className={style.causesText}>Causes</span>
        </h1>
        <p className={style.titleDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolorem.</p>
      </div>
      <div className={style.mainContentDiv}>
        <div className={style.content}>
          <img className={style.image} src={imgOne} alt="avatar" />
          <button className={style.donateButton}>DONATE NOW</button>
          <div>
            <h2 className={style.bottomTitle}>Education for Children</h2>
            <p className={style.bottomTitleDescription}>Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
            <div className={style.bottomContentDiv}>
              <span className={style.bottomContentDescription}>Raised: $2032</span>
              <span className={style.bottomContentDescription}>Goal: $32120</span>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <img className={style.image} src={imgTwo} alt="avatar" />
          <button className={style.donateButton}>DONATE NOW</button>
          <div>
            <h2 className={style.bottomTitle}>Sponsor a Child Today</h2>
            <p className={style.bottomTitleDescription}>Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
            <div className={style.bottomContentDiv}>
              <span className={style.bottomContentDescription}>Raised: $2232</span>
              <span className={style.bottomContentDescription}>Goal: $72120</span>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <img className={style.image} src={imgThree} alt="avatar" />
          <button className={style.donateButton}>DONATE NOW</button>
          <div>
            <h2 className={style.bottomTitle}>Shelter for Poor Child</h2>
            <p className={style.bottomTitleDescription}>Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
            <div className={style.bottomContentDiv}>
              <span className={style.bottomContentDescription}>Raised: $5232</span>
              <span className={style.bottomContentDescription}>Goal: $502120</span>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <div>
            <img className={style.image} src={imgFour} alt="avatar" />
            <button className={style.donateButton}>DONATE NOW</button>
          </div>
          <div>
            <h2 className={style.bottomTitle}>Happiness for Orphan Child</h2>
            <p className={style.bottomTitleDescription}>Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
            <div className={style.bottomContentDiv}>
              <span className={style.bottomContentDescription}>Raised: $8232</span>
              <span className={style.bottomContentDescription}>Goal: $502120</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
