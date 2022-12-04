import React from "react";
import style from "./News.module.css";
import img1 from "../../../src/images/latest-news/news-1.jpg";
import img2 from "../../../src/images/latest-news/news-2.jpg";
import img3 from "../../../src/images/latest-news/news-3.jpg";
import { AiOutlineSlack, AiFillMessage, AiOutlineUser } from "react-icons/ai";

const News = () => {
  return (
    <div className={style.NewsDiv}>
      <h4 className={style.articleText}>
        <span>
          <AiOutlineSlack className={style.icon} />{" "}
        </span>{" "}
        ARTICLE
      </h4>
      <h1 className={style.title}>
        <span className={style.readText}>Read Our</span> Latest News
      </h1>

      <div className={style.mainContentDiv}>
        <div className={style.content}>
          <img className={style.image} src={img1} alt="avatar" />
          <div className={style.subContent}>
            <h2 className={style.bottomTitle}>How to Handle Unexpected Situations on Road</h2>
            <p className={style.bottomTitleDescription}>Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
            <button className={style.readMoreButton}>READ MORE</button>
            <div className={style.bottomContentDiv}>
              <span className={style.adminText}>
                <AiOutlineUser className={style.adminIcon} /> Admin
              </span>
              <span className={style.adminText}>
                <AiFillMessage className={style.messageIcon} /> 0 Comment
              </span>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <img className={style.image} src={img2} alt="avatar" />
          <div className={style.subContent}>
            <h2 className={style.bottomTitle}>Our Donation is Hope for Poor Childrens</h2>
            <p className={style.bottomTitleDescription}>Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
            <button className={style.readMoreButton}>READ MORE</button>
            <div className={style.bottomContentDiv}>
              <span className={style.adminText}>
                <AiOutlineUser className={style.adminIcon} /> Admin
              </span>
              <span className={style.adminText}>
                <AiFillMessage className={style.messageIcon} /> 0 Comment
              </span>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <img className={style.image} src={img3} alt="avatar" />
          <div className={style.subContent}>
            <h2 className={style.bottomTitle}>Our Donation is Hope for Poor Childrens</h2>
            <p className={style.bottomTitleDescription}>Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
            <button className={style.readMoreButton}>READ MORE</button>
            <div className={style.bottomContentDiv}>
              <span className={style.adminText}>
                <AiOutlineUser className={style.adminIcon} /> Admin
              </span>
              <span className={style.adminText}>
                <AiFillMessage className={style.messageIcon} /> 0 Comment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
