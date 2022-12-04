import React from "react";
import style from "./Footer.module.css";
import { FaFacebookF, FaAmazon, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={style.FooterDiv}>
        <div className={style.topTitleDiv}>
          <div>
            <h1 className={style.title}>TRUSTHAND</h1>
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
        <p className={style.copyright}>Copyright&copy; Better Tomorrow Org</p>
      </div>
    </div>
  );
};

export default Footer;
// FcOrgUnit
