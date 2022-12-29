import React from "react";
import style from "./Service.module.css";
import image from "../../../src/images/event-details-img.jpg";
import HalfImg from "../../../src/images/halfImg.jpg";
import image1 from "../../../src/images/make-donation-two-img-1.jpg";
import image2 from "../../../src/images/make-donation-two-img-2.jpg";

const Service = () => {
  return (
    <div className={style.serviceMainDiv}>
      <div className={style.imageDiv}>
        <div className={style.overlay}>
          <h1 className={style.ServiceText}>FOOD SERVICES</h1>
        </div>
        <img className={style.HalfImg} src={HalfImg} alt="avatar" />
      </div>
      <div className={style.BottomSection}>
        <div className={style.BottomContentDiv}>
          <div className={style.SectionImageDiv}>
            <div className={style.OverlyStyle}>
              <a className={style.Donate} href="/donate">
                Donate
              </a>
            </div>
            <img className={style.SectionImage} src={image} alt="avatar" />
          </div>
          <div>
            <h1 className={style.Title}>Help for poor people worldwide</h1>
            <p className={style.Paragraph}>
              Looking for Delivery Food Service? Get All Results from Across the Web. 99% Match on Delivery Food Service. Unlimited Access. Privacy Friendly. Results & Answers. The Best Resources.
              Completely Secure. Always Facts. Types: News, Images, Wiki, Web, Videos. Looking for Delivery Food Service? Get All Results from Across the Web. 99% Match on Delivery Food Service.
              Unlimited Access. Privacy Friendly. Results & Answers. The Best Resources. Completely Secure. Always Facts. Types: News, Images, Wiki, Web, Videos. Looking for Delivery Food Service? Get
              All Results from Across the Web. 99% Match on Delivery Food Service. Unlimited Access. Privacy Friendly. Results & Answers. The Best Resources. Completely Secure. Always Facts. Types:
              News, Images, Wiki, Web, Videos. All Results from Across the Web. 99% Match on Delivery Food Service. Unlimited Access. Privacy Friendly. Results & Answers. The Best Resources.
              Completely Secure. Always Facts. Types: News, Images, Wiki, Web, Videos.
            </p>
          </div>
        </div>
      </div>
      <div className={style.LastBottomSection}>
        <div className={style.LastImageDiv}>
          <div className={style.SingleImageDiv}>
            <img className={style.LastImage} src={image2} alt="avatar" />
          </div>
          <div className={style.SingleImageDiv}>
            <img className={style.LastImage} src={image1} alt="avatar" />
          </div>
        </div>
        <div>
          <h1 className={style.LastTitle}>Help clean & fresh water for children</h1>
          <p className={style.LastParagraph}>
            Looking for Delivery Food Service? Get All Results from Across the Web. 99% Match on Delivery Food Service. Unlimited Access. Privacy Friendly. Results & Answers. The Best Resources.
            Completely Secure. Always Facts. Types: News, Images, Wiki, Web, Videos. Looking for Delivery Food Service? Get All Results from Across the Web. 99% Match on Delivery Food Service.
            Unlimited Access. Privacy Friendly. Results & Answers. The Best Resources. Completely Secure. Always Facts. Types: News, Images, Wiki, Web, Videos. Looking for Delivery Food Service? Get
            All Results from Across the Web. 99% Match on Delivery Food Service. Unlimited Access. Privacy Friendly. Results & Answers. The Best Resources. Completely Secure. Always Facts. Types:
            News, Images, Wiki, Web, Videos. All Results from Across the Web. 99% Match on Delivery Food Service. Unlimited Access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
