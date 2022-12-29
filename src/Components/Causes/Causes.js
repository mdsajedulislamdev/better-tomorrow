import React from "react";
import { useState } from "react";
import style from "./Causes.module.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

import array from "./CausesData";

const Causes = () => {
  const [items] = useState(array);
  const length = items.length;
  const [indexNumber, setIndexNumber] = useState(0);

  const Next = () => {
    setIndexNumber(indexNumber === length - 3 ? 0 : indexNumber + 3);
  };
  const Prev = () => {
    setIndexNumber(indexNumber === 0 ? length - 3 : indexNumber - 3);
  };

  return (
    <div className={style.causesMainDiv}>
      <div>
        <h1 className={style.topTitle}>
          Our <span className={style.causesText}>Causes</span>
        </h1>
        <p className={style.titleDescription}>Every child has a right to a healthy meal. From lack of a school lunch program.</p>
      </div>
      <div className={style.mainContentDiv}>
        {items.slice(indexNumber, indexNumber + 3).map((item) => (
          <div className={style.TopContentsDiv} key={item.id}>
            <div className={style.imageDiv}>
              <div className={style.OverlyStyle}>
                <a href="/donate" className={style.donateButton}>
                  {item?.button}
                </a>
              </div>
              <img className={style.image} src={item?.image} alt="avatar" />
            </div>
            <div className={style.BottomContentsMainDiv}>
              <h2 className={style.bottomTitle}>{item?.title}</h2>
              <p className={style.bottomTitleDescription}>{item?.description}</p>
              <div className={style.bottomContentDiv}>
                <span className={style.bottomContentDescription}>Raised: ${item?.raised}</span>
                <span className={style.bottomContentDescription}>Goal: ${item?.goal}</span>
              </div>
            </div>
          </div>
        ))}
        <div className={style.NPButtonDiv}>
          <button className={style.PrevButton} onClick={Prev}>
            {<HiChevronLeft className={style.LeftIcon} />}
          </button>
          <button className={style.NextButton} onClick={Next}>
            {<HiChevronRight className={style.RightIcon} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Causes;
