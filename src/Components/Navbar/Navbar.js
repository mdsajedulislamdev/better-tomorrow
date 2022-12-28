import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={style.position}>
      <div className={isMobileNav ? style.mobileNav : style.navContent} onClick={() => setIsMobileNav(false)}>
        <Link className={style.navTitle} to="/">
          Better Tomorrow
        </Link>
        <CustomLink className={style.customLink} to="/">
          <span className={style.navText}> HOME</span>
        </CustomLink>
        <div className={style.customLink}>
          <span className={style.navText} onClick={() => setDropdownOpen(!dropdownOpen)}>
            {" "}
            SERVICES
          </span>{" "}
          <div className={style.divIcon}></div>
          <ul className={dropdownOpen ? style.MyDropdown : style.dropdown} onClick={() => setIsMobileNav(false)}>
            <li>
              <Link className={style.dropLink} to="/service">
                Food Services
              </Link>
            </li>
            <li>
              <Link className={style.dropLink} to="/#">
                Custom Link
              </Link>
            </li>
            <li>
              <Link className={style.dropLink} to="/#">
                Custom Link
              </Link>
            </li>
            <li>
              <Link className={style.dropLink} to="/#">
                Custom Link
              </Link>
            </li>
            <li>
              <Link className={style.dropLink} to="/#">
                Custom Link
              </Link>
            </li>
          </ul>
        </div>
        <CustomLink className={style.customLink} to="/event">
          <span className={style.navText}> EVENT</span>
        </CustomLink>
        <CustomLink className={style.customLink} to="/blog">
          <span className={style.navText}> CONTACT</span>
        </CustomLink>
        <div className={style.callAnytimeContent}>
          <h4 className={style.callAnytime}>Call Anytime</h4>
          <h4 className={style.number}>+88 0173-73-22635</h4>
        </div>
      </div>
      <div>{isMobileNav ? <FaTimes className={style.timesIcon} onClick={() => setIsMobileNav(false)} /> : <FaBars className={style.burgerIcon} onClick={() => setIsMobileNav(true)} />}</div>
    </div>
  );
};

export default Navbar;
