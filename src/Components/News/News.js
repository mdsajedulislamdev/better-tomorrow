import React from "react";
import style from "./News.module.css";
import img1 from "../../../src/images/latest-news/news-1.jpg";
import img2 from "../../../src/images/latest-news/news-2.jpg";
import img3 from "../../../src/images/latest-news/news-3.jpg";
import { AiOutlineSlack, AiFillMessage, AiOutlineUser } from "react-icons/ai";

const News = () => {
  return (
    <div className={style.NewsDiv}>
      <div>
        <h4 className={style.articleText}>
          <span>{<AiOutlineSlack className={style.icon} />}</span>
          ARTICLE
        </h4>
        <div className={style.ArticleCustomDivStyle}></div>
      </div>
      <div>
        <h1 className={style.title}>
          <span className={style.readText}>Read Our</span> Latest News
        </h1>
        <div className={style.TitleCustomDivStyle}></div>
      </div>
      <div className={style.mainContentDiv}>
        <div className={style.content}>
          <div className={style.MainImgDiv}>
            {/* ============================Overly Style========================= */}
            <div className={style.OverlyStyle}>
              <a className={style.DonateLink} href="/donate">
                Please Donate
              </a>
            </div>
            <img className={style.image} src={img1} alt="avatar" />
          </div>
          <div className={style.subContent}>
            <h2 className={style.bottomTitle}>How to Handle Unexpected Situations on Road</h2>
            <p className={style.bottomTitleDescription}>From lack of a school lunch program in the US. To scarcity of resources overseas !</p>
            <button className={style.readMoreButton}>READ MORE</button>
            <div className={style.bottomContentDiv}>
              <span className={style.adminText}>
                <AiOutlineUser className={style.adminIcon} /> Admin
              </span>
              <span className={style.adminText}>
                <AiFillMessage className={style.messageIcon} /> 2 Comment
              </span>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.MainImgDiv}>
            <div className={style.OverlyStyle}>
              <a className={style.DonateLink} href="/donate">
                Please Donate
              </a>
            </div>
            <img className={style.image} src={img2} alt="avatar" />
          </div>
          <div className={style.subContent}>
            <h2 className={style.bottomTitle}>Our Donation is Hope for Poor Childrens</h2>
            <p className={style.bottomTitleDescription}>From lack of a school lunch program in the US. To scarcity of resources overseas !</p>
            <button className={style.readMoreButton}>READ MORE</button>
            <div className={style.bottomContentDiv}>
              <span className={style.adminText}>
                <AiOutlineUser className={style.adminIcon} /> Admin
              </span>
              <span className={style.adminText}>
                <AiFillMessage className={style.messageIcon} /> 10 Comment
              </span>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.MainImgDiv}>
            <div className={style.OverlyStyle}>
              <a className={style.DonateLink} href="/donate">
                Please Donate
              </a>
            </div>
            <img className={style.image} src={img3} alt="avatar" />
          </div>
          <div className={style.subContent}>
            <h2 className={style.bottomTitle}>Our Donation is Hope for Poor Childrens</h2>
            <p className={style.bottomTitleDescription}>From lack of a school lunch program in the US. To scarcity of resources overseas !</p>
            <button className={style.readMoreButton}>READ MORE</button>
            <div className={style.bottomContentDiv}>
              <span className={style.adminText}>
                <AiOutlineUser className={style.adminIcon} /> Admin
              </span>
              <span className={style.adminText}>
                <AiFillMessage className={style.messageIcon} /> 5 Comment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
