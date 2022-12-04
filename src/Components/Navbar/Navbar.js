import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  return (
    <div>
      <div className={isMobileNav ? style.mobileNav : style.navContent} onClick={() => setIsMobileNav(false)}>
        <Link className={style.navTitle} to="/">
          Better Tomorrow <br />
          <span className={style.foundationText}>Organization</span>
        </Link>
        <CustomLink className={style.customLink} id={style.customLinkOne} to="/">
          <span className={style.navText}> Home</span>
        </CustomLink>
        <CustomLink className={style.customLink} id={style.customLinkTwo} to="/service">
          <span className={style.navText}> Service</span>
        </CustomLink>
        <CustomLink className={style.customLink} id={style.customLinkThree} to="/event">
          <span className={style.navText}> Event</span>
        </CustomLink>
        <CustomLink className={style.customLink} id={style.customLinkFour} to="/blog">
          <span className={style.navText}> Blog</span>
        </CustomLink>
        <div className={style.buttonDiv}>
          <button className={style.navButton}>DONATE NOW</button>
          <button className={style.navButton}>LOGIN</button>
        </div>
      </div>
      <div>{isMobileNav ? <FaTimes className={style.timesIcon} onClick={() => setIsMobileNav(false)} /> : <FaBars className={style.burgerIcon} onClick={() => setIsMobileNav(true)} />}</div>
    </div>
  );
};

export default Navbar;

// FaTimes
// FaListUl
//FaBars
