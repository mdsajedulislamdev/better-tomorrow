import React from "react";
import style from "./TopNav.module.css";
import { AiFillPhone, AiFillMail, AiOutlineEnvironment, AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const TopNav = () => {
  return (
    <div className={style.topNav}>
      <div className={style.telephoneIconDiv}>
        <i>
          <AiFillPhone className={style.telephoneIcon} />
        </i>
        <span className={style.telephoneNumber}>Tel: +88 0173-73-22635</span>
      </div>
      <div className={style.emailIconDiv}>
        <i>
          <AiFillMail className={style.emailIcon} />
        </i>
        <span className={style.emailNumber}>sajedulislam.cse@gmail.com</span>
      </div>
      <div className={style.locationIconDiv}>
        <i>
          <AiOutlineEnvironment className={style.locationIcon} />
        </i>
        <span className={style.locationText}>24/13 Pirerbag Taltola Dhaka</span>
      </div>
      <div className={style.socialIconDiv}>
        <a href="https://www.linkedin.com/in/mdsajedulislam-bd/" target="_blank" rel="noreferrer">
          <AiFillLinkedin className={style.socialIcon} />
        </a>
        <a href="https://github.com/mdsajedulislamdev?tab=repositories" target="_blank" rel="noreferrer">
          <AiFillGithub className={style.socialIcon} />
        </a>
        <a href="https://stackoverflow.com/users/18383895/md-sajedul-islam?tab=profile" target="_blank" rel="noreferrer">
          <BsStackOverflow className={style.socialIcon} />
        </a>
        <a href="https://www.facebook.com/mdshajedul.islam" target="_blank" rel="noreferrer">
          <AiFillFacebook className={style.socialIcon} />
        </a>
      </div>
      <button className={style.donationButton}>
        <a href="/donate">Make Donation</a>
      </button>
    </div>
  );
};

export default TopNav;
