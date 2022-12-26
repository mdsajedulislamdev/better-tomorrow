import React from "react";
import style from "./Help.module.css";
import { FaPrayingHands, FaHandHoldingUsd, FaDollarSign, FaHandshake, FaLongArrowAltRight } from "react-icons/fa";

const Help = () => {
  return (
    <div className={style.HelpContainerDiv}>
      <div>
        <div>
          <h1 className={style.title}>
            <span className={style.howText}>HOW</span> COULD <span className={style.youText}>YOU</span> HELP ?
          </h1>
          <div className={style.CustomBorderDiv}></div>
        </div>
        <div className={style.mainContentDiv}>
          <div className={style.content}>
            <FaPrayingHands className={style.icon} />
            <h3 className={style.volunteerTitle}>BECOME VOLUNTEER</h3>
            <p className={style.volunteerDescription}>
              Reprehenderit.consectetur adipisicing elit. reprehenderit.adipisicing elit. Minus nobis quos neque vitae! Voluptatum at sed magni sequi laborum.
            </p>
            <a href="#" className={style.readMoreText}>
              READ MORE <i>{<FaLongArrowAltRight className={style.ReadMoreIcon} />}</i>
            </a>
          </div>
          <div className={style.content}>
            <FaHandHoldingUsd className={style.icon} />
            <h3 className={style.volunteerTitle}>GIVE INSPIRATION</h3>
            <p className={style.volunteerDescription}>Reprehenderit.consectetur adipisicing elit.adipisicing elit. Minus nobis quos neque vitae! Voluptatum at sed magni sequi.</p>
            <a href="#" className={style.readMoreText}>
              READ MORE <i>{<FaLongArrowAltRight className={style.ReadMoreIcon} />}</i>
            </a>
          </div>
          <div className={style.content}>
            <FaDollarSign className={style.icon} />
            <h3 className={style.volunteerTitle}>SEND DONATION</h3>
            <p className={style.volunteerDescription}>
              Consectetur adipisicing elit. reprehenderit.consectetur adipisicing elit.adipisicing elit. Minus nobis quos neque vitae! Voluptatum at sed magni sequi laborum harum.
            </p>
            <a href="#" className={style.readMoreText}>
              READ MORE <i>{<FaLongArrowAltRight className={style.ReadMoreIcon} />}</i>
            </a>
          </div>
          <div className={style.content}>
            <FaHandshake className={style.icon} />
            <h3 className={style.volunteerTitle}>CALL FOR DONATION</h3>
            <p className={style.volunteerDescription}>
              Adipisicing elit. reprehenderit.consectetur adipisicing elit.adipisicing elit. Minus nobis quos neque vitae! Voluptatum at sed magni sequi laborum.
            </p>
            <a href="#" className={style.readMoreText}>
              READ MORE <i>{<FaLongArrowAltRight className={style.ReadMoreIcon} />}</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
