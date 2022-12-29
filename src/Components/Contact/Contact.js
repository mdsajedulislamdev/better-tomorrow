import React from "react";
import style from "./Contact.module.css";
import image from "../../../src/images/contactHalfImg.jpg";
import { AiFillGithub, AiFillGoogleSquare, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={style.blogMainDiv}>
      <div className={style.imageDiv}>
        <div className={style.overlay}>
          <h1 className={style.contactText}>CONTACT</h1>
        </div>
        <img className={style.image} src={image} alt="avatar" />
      </div>
      <div className={style.AllContentsDiv}>
        <div className={style.askedNContactText}>
          <p className={style.AskedText}>Asked Question</p>
          <h1 className={style.ContactText}>Contact With Us</h1>
        </div>
        <div className={style.InputTypeMainDiv}>
          <div className={style.InputTypeSubDiv}>
            <div className={style.Inputs}>
              <div className={style.InputsGap}>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
              </div>
              <div className={style.InputsGap}>
                <input type="text" placeholder="Your Number" />
                <input type="text" placeholder="Your Subject" />
              </div>
            </div>
            <div className={style.TextAreaDiv}>
              <textarea className={style.TextArea} cols="30" rows="5" placeholder="Type Your Message"></textarea>
            </div>
            <button className={style.SendButton}>
              <a href="/#">Send Message</a>
            </button>
          </div>
          <div className={style.RightSection}>
            <address>
              <h3 className={style.AddressText}>Address</h3>
              <h4 className={style.AddressTitle}>44 New Street, Washington DC</h4>
              <h4 className={style.AddressTitle}>United State, America</h4>
            </address>
            <address>
              <h3 className={style.PhoneText}>Phone</h3>
              <h4 className={style.AddressTitle}>Local: 0022 2255 6666</h4>
              <h4 className={style.AddressTitle}>Mobile: 1200 3232 5655</h4>
            </address>
            <address>
              <h3 className={style.EmailText}>Email</h3>
              <h4 className={style.AddressTitle}>Local: 0022 2255 6666</h4>
              <h4 className={style.AddressTitle}>Mobile: 1200 3232 5655</h4>
            </address>
            <address>
              <h3 className={style.FollowText}>Follow</h3>
              <div className={style.IconDiv}>
                <i>{<AiFillGithub className={style.GithubIcon} />}</i>
                <i>{<AiFillGoogleSquare className={style.GoogleIcon} />}</i>
                <i>{<AiFillTwitterCircle className={style.TwitterIcon} />}</i>
                <i>{<AiFillInstagram className={style.InstaGramIcon} />}</i>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div className={style.SubscribeDiv}>
        <div className={style.SubscribeContents}>
          <h1 className={style.SubscribeText}>
            Subscribe Our <br /> News Letter
          </h1>
          <button className={style.SubscribeButton}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
