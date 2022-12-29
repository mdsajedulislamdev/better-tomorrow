import React from "react";
import style from "./Footer.module.css";
import { FaFacebookF, FaAmazon, FaGithub, FaInstagram } from "react-icons/fa";

import img1 from "../../../src/images/food.jpg";
import img2 from "../../../src/images/gallery/11.jpg";
import img3 from "../../../src/images/gallery/1.jpg";
import img4 from "../../../src/images/imgOne.jpg";
import { useState } from "react";

const Footer = () => {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className={style.footerMainDiv}>
      <div className={style.FooterDiv}>
        <div className={style.topTitleDiv}>
          <div>
            <h1 className={style.title}>BETTERTOMORROW</h1>
          </div>
          <div className={style.time}>
            <h1>{currentTime}</h1>
          </div>
          <div className={style.iconDiv}>
            <span>
              <FaFacebookF className={style.icon} />
            </span>
            <span>
              <FaAmazon className={style.icon} />
            </span>
            <span>
              <FaGithub className={style.icon} />
            </span>
            <span>
              <FaInstagram className={style.icon} />
            </span>
          </div>
        </div>
        <div className={style.TitleAndContents}>
          <div>
            <h4 className={style.Title}>Special Health Service</h4>
            <div className={style.Links}>
              <a href="/donate">Health care for poor people</a>
              <a href="/donate">Super home for children</a>
              <a href="/donate">Land property for child</a>
              <a href="/donate">Farmer facilities for children</a>
              <a href="/donate">Aggro farms for poor people</a>
            </div>
          </div>
          <div>
            <h4 className={style.Title}>Super Food Service</h4>
            <div className={style.Links}>
              <a href="/donate">Farmer facilities for children</a>
              <a href="/donate">Food care for poor people</a>
              <a href="/donate">Super home for children</a>
              <a href="/donate">Aggro farms for poor people</a>
              <a href="/donate">Land property for child</a>
            </div>
          </div>
          <div>
            <h4 className={style.Title}>Land Service For Child</h4>
            <div className={style.Links}>
              <a href="/donate">Lands facilities for children</a>
              <a href="/donate">Food care for poor people</a>
              <a href="/donate">Super home for children</a>
              <a href="/donate">Aggro farms for poor people</a>
              <a href="/donate">Land property for child</a>
            </div>
          </div>
          <div className={style.GalleryDiv}>
            <h4 className={style.Title}>Gallery</h4>
            <div className={style.Gallery}>
              <div className={style.ImageGap}>
                <img className={style.images} src={img4} alt="avatar" />
                <img className={style.images} src={img3} alt="avatar" />
              </div>
              <div className={style.ImageGap}>
                <img className={style.images} src={img2} alt="avatar" />
                <img className={style.images} src={img1} alt="avatar" />
              </div>
            </div>
          </div>
        </div>
        <p className={style.copyright}>Copyright&copy; Better Tomorrow Org</p>
      </div>
    </div>
  );
};

export default Footer;
