import React from "react";
import style from "./Help.module.css";
import { FaPrayingHands, FaHandHoldingUsd, FaDollarSign, FaHandshake } from "react-icons/fa";

const Help = () => {
  return (
    <div className={style.help}>
      <div>
        <div>
          <h1 className={style.title}>
            <span className={style.howText}>HOW</span> COULD <span className={style.youText}>YOU</span> HELP ?
          </h1>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis quos neque vitae! <br /> Voluptatum at sed magni sequi laborum harum.
          </p>
        </div>
        <div className={style.mainContentDiv}>
          <div className={style.content}>
            <i className={style.icon}>
              <FaPrayingHands />
            </i>
            <h3 className={style.volunteerTitle}>BECOME VOLUNTEER</h3>
            <p className={style.volunteerDescription}>
              Quas, reprehenderit.consectetur adipisicing elit. reprehenderit.adipisicing elit. Minus nobis quos neque vitae! Voluptatum at sed magni sequi laborum harum.
            </p>
            <h4 className={style.readMoreText}>READ MORE</h4>
          </div>
          <div className={style.content}>
            <i className={style.icon}>
              <FaHandHoldingUsd />
            </i>
            <h3 className={style.volunteerTitle}>GIVE INSPIRATION</h3>
            <p className={style.volunteerDescription}>Reprehenderit.consectetur adipisicing elit.adipisicing elit. Minus nobis quos neque vitae! Voluptatum at sed magni sequi laborum harum.</p>
            <h4 className={style.readMoreText}>READ MORE</h4>
          </div>
          <div className={style.content}>
            <i className={style.icon}>
              <FaDollarSign />
            </i>
            <h3 className={style.volunteerTitle}>SEND DONATION</h3>
            <p className={style.volunteerDescription}>
              Consectetur adipisicing elit. reprehenderit.consectetur adipisicing elit.adipisicing elit. Minus nobis quos neque vitae! Voluptatum at sed magni sequi laborum harum.
            </p>
            <h4 className={style.readMoreText}>READ MORE</h4>
          </div>
          <div className={style.content}>
            <i className={style.icon}>
              <FaHandshake />
            </i>
            <h3 className={style.volunteerTitle}>CALL FOR DONATION</h3>
            <p className={style.volunteerDescription}>
              Adipisicing elit. reprehenderit.consectetur adipisicing elit.adipisicing elit. Minus nobis quos neque vitae! Voluptatum at sed magni sequi laborum harum.
            </p>
            <h4 className={style.readMoreText}>READ MORE</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

// FaPrayingHands
// FaHandHoldingUsd
// FaDollarSign
// FaHandshake
