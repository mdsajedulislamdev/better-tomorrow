import React, { useEffect } from "react";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import style from "./Think.module.css";
import data from "./ThinkData";

const Think = () => {
  const [allData] = useState(data);
  const length = allData.length;
  const [indexNumber, setIndexNumber] = useState(0);

  const Next = () => {
    setIndexNumber(indexNumber === length - 1 ? 0 : indexNumber + 1);
  };
  const Prev = () => {
    setIndexNumber(indexNumber === 0 ? length - 1 : indexNumber - 1);
  };

  // useEffect(() => {
  // setInterval(() => {
  //   setIndexNumber((indexNumber) => (indexNumber == length - 1 ? 0 : indexNumber + 1));
  // }, 3000);
  // }, []);

  return (
    <div className={style.thinkDiv}>
      <div>
        <h1 className={style.title}>
          WHAT PEOPLE <span className={style.thinkText}>THINK</span>
        </h1>
        <div className={style.CustomBorderDiv}></div>
      </div>
      <div className={style.mainContent}>
        {allData.slice(indexNumber, indexNumber + 1).map((obj) => (
          <div className={style.Contents} key={obj.id}>
            <div className={style.ImgNameTitleDiv}>
              <img className={style.image} src={obj?.image} alt="avatar" />
              <p className={style.ImageTitle}>{obj?.name}</p>
              <p className={style.ImageName}>{obj?.title}</p>
            </div>
            <div className={style.DescriptionDiv}>
              <p className={style.Description}>{obj?.description}</p>
              <img className={style.QuoteIcon} src={obj?.quoteRight} alt="icon" />
            </div>
          </div>
        ))}
        <div className={style.NextPrevButtonDiv}>
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

export default Think;
