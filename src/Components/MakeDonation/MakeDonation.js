import React from "react";
import style from "./MakeDonation.module.css";
import donateImage from "../../../src/images/donateImg.jpg";

const MakeDonation = () => {
  return (
    <div className={style.MakeDonationMainDiv}>
      <div className={style.ImageDiv}>
        <div className={style.overlay}>
          <h1 className={style.AppreciateText}>We Appreciate You For Your Kindness</h1>

          <div className={style.DonateButtonDiv}>
            <input className={style.DonateInput} type="number" placeholder="$Put value" />
            <button className={style.DonateButton}>Donate</button>
          </div>
        </div>
        <img className={style.DonateImg} src={donateImage} alt="avatar" />
      </div>
    </div>
  );
};

export default MakeDonation;
