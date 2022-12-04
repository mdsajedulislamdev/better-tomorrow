import React from "react";
import style from "./Gallery.module.css";
import img1 from "../../../src/images/gallery/1.jpg";
import img2 from "../../../src/images/gallery/2.jpg";
import img3 from "../../../src/images/gallery/3.jpg";
import img4 from "../../../src/images/gallery/4.jpg";
import img5 from "../../../src/images/gallery/5.jpg";
import img6 from "../../../src/images/gallery/6.jpg";
import img7 from "../../../src/images/gallery/7.jpg";
import img8 from "../../../src/images/gallery/8.jpg";
import img9 from "../../../src/images/gallery/9.jpg";
import img10 from "../../../src/images/gallery/10.jpg";
import img11 from "../../../src/images/gallery/11.jpg";
import img12 from "../../../src/images/gallery/12.jpg";

const Gallery = () => {
  return (
    <div className={style.galleryMainDiv}>
      <div className={style.galleryContent}>
        <h1 className={style.galleryTitle}>
          <span className={style.photoText}>Photo</span> Gallery
        </h1>
        <p className={style.galleryTitleDescription}>
          There are many variations of passages. But the majority have suffered alteration in some form, <br /> by injected humour, or randomised words.
        </p>
      </div>
      <div className={style.imageGallery}>
        <div className={style.imageDiv}>
          <img className={style.image} src={img1} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img2} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img3} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img4} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img5} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img6} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img7} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img8} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img9} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img10} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img11} alt="avatar" />
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={img12} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
