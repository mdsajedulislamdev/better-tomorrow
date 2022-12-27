import React from "react";
import style from "./Event.module.css";
import img from "../../../src/images/halfImg.jpg";
import data from "./EventData";
import { useState } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Event = () => {
  const [allData] = useState(data);
  return (
    <div className={style.eventMainDiv}>
      <div className={style.imageDiv}>
        <div className={style.overlay}>
          <h1 className={style.eventText}>OUR EVENT</h1>
        </div>
        <img className={style.image} src={img} alt="avatar" />
      </div>
      <div className={style.EventMapMainDiv}>
        {allData.map((item) => (
          <div className={style.AllContentDiv}>
            <div className={style.EventImageDiv}>
              <p className={style.Date}>{item.date}</p>
              <img className={style.eventImg} src={item.img} alt="avatar" />
            </div>
            <div className={style.SubContentDiv}>
              <h2 className={style.eventTitle}>{item.title}</h2>
              <p className={style.eventTime}>
                {" "}
                <span>{<AiOutlineFieldTime className={style.EventTimeIcon} />}</span> {item.time}
              </p>
              <p className={style.eventLocation}>
                {" "}
                <span>{<HiOutlineLocationMarker className={style.EventLocationIcon} />}</span>
                {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={style.DonateSection}>
        <div className={style.DonateButtonDiv}>
          <h1 className={style.HelpText}>
            Help For Poor <br /> people Worldwide
          </h1>
          <button className={style.DonateButton}>
            <a href="/#">Donate Please</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
