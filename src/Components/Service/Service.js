import React from "react";
import { useState } from "react";
import style from "./Service.module.css";
import img1 from "../../../src/images/gallery/1.jpg";
import img2 from "../../../src/images/gallery/2.jpg";
import img3 from "../../../src/images/gallery/3.jpg";
import img4 from "../../../src/images/gallery/4.jpg";
import img5 from "../../../src/images/gallery/5.jpg";

// import { useEffect } from "react";

const Service = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const [allImages, setAllImages] = useState([img1, img2, img3, img4, img5]);

  // ==========setInterval Method==============================
  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentImg((currentImg) => (currentImg < allImages.length ? currentImg + 1 : 0));
  //   }, 2000);
  // }, []);

  // ===========================OnClick====================
  const Next = () => {
    setCurrentImg(currentImg === allImages.length - 1 ? 0 : currentImg + 1);
  };
  const Prev = () => {
    setCurrentImg(currentImg === 0 ? allImages.length - 1 : currentImg - 1);
  };

  const goToImageIndex = (id) => {
    setCurrentImg(id);
  };
  return (
    <div className={style.serviceMainDiv}>
      <h1>Service:{allImages.length}</h1>
      <button onClick={Next}>NEXT</button>
      <button onClick={Prev}>PREV</button>
      <img className={style.image} src={allImages[currentImg]} alt="avatar" />
      <div className={style.dotBlockDiv}>
        {allImages.map((image, imageIndex) => (
          <div key={imageIndex} className={style.dotBlock} onClick={() => goToImageIndex(imageIndex)}></div>
        ))}
      </div>
    </div>
  );
};

export default Service;
