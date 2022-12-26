import React from "react";
import style from "./Providing.module.css";
import book from "../../../src/images/book.png";
import care from "../../../src/images/healthcare.png";
import food from "../../../src/images/food.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Providing = () => {
  return (
    <div className={style.providing}>
      <div>
        <h1 className={style.title}>
          WE ARE <span className={style.providingText}>PROVIDING</span>
        </h1>
        <h4 className={style.WorldwideText}>WORLDWIDE</h4>
        <div className={style.CustomBorderDiv}></div>
      </div>
      <div className={style.mainContentDiv}>
        <div className={style.content}>
          <div className={style.ImageDiv}>
            <div className={style.OverlyStyle}>
              <a className={style.Donate} href="#">
                Donate
              </a>
            </div>
            <img className={style.image} src={book} alt="book" />
          </div>
          <h3 className={style.heading}>We providing books for poor children</h3>
          <p className={style.paragraph}>Every child has a right to a healthy meal.To scarcity of resources overseas, WE Cause helping to stand in the gap. Give Today!</p>
          <div className={style.ReadMoreDiv}>
            <a className={style.ReadMoreText} href="#">
              Read More<span className={style.ReadMoreIcon}>{<FaLongArrowAltRight />}</span>
            </a>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.ImageDiv}>
            <div className={style.OverlyStyle}>
              <a className={style.Donate} href="#">
                Donate
              </a>
            </div>
            <img className={style.image} src={care} alt="care" />
          </div>
          <h3 className={style.heading}>We providing healthcare for children</h3>
          <p className={style.paragraph}>Every child has a right to a healthy meal.To scarcity of resources overseas, WE Cause helping to stand in the gap. Give Today!</p>
          <div className={style.ReadMoreDiv}>
            <a className={style.ReadMoreText} href="#">
              Read More<span className={style.ReadMoreIcon}>{<FaLongArrowAltRight />}</span>
            </a>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.ImageDiv}>
            <div className={style.OverlyStyle}>
              <a className={style.Donate} href="#">
                Donate
              </a>
            </div>
            <img className={style.image} src={food} alt="food" />
          </div>
          <h3 className={style.heading}>We providing food for poor children</h3>
          <p className={style.paragraph}>Every child has a right to a healthy meal.To scarcity of resources overseas, WE Cause helping to stand in the gap. Give Today!</p>
          <div className={style.ReadMoreDiv}>
            <a className={style.ReadMoreText} href="#">
              Read More<span className={style.ReadMoreIcon}>{<FaLongArrowAltRight />}</span>
            </a>
          </div>
        </div>
      </div>
      <div className={style.CustomBorderRightBottom}></div>
    </div>
  );
};

export default Providing;
