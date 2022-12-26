import React from "react";
import style from "./RecentNews.module.css";
import { useState, useEffect } from "react";
import data from "../../RecentNewsData";
import img from "../../RecentNewsData";
import { BsPinMapFill, BsFillCloudFill, BsGlobe, BsGearFill, BsSunFill, BsSunsetFill } from "react-icons/bs";

const RecentNews = () => {
  const [images] = useState(data);
  const length = images.length;
  const [currentImage, setCurrentImage] = useState(0);

  const [allImages] = useState(img);
  const imageLength = allImages.length;
  const [pageNumber, setPageNumber] = useState(0);

  // ==============For top Section========================
  const Next = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };
  const Prev = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  // ===================For Bottom Section=============================
  const NextFunc = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };
  const PrevFunc = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  // ================Interval for bottom section===============================
  useEffect(() => {
    setInterval(() => {
      setPageNumber((pageNumber) => (pageNumber === imageLength - 1 ? 0 : pageNumber + 1));
    }, 5000);
  }, []);

  return (
    <div className={style.RecentNewsContainer}>
      <div className={style.RecentNewsContent}>
        <div className={style.TitleLeftDiv}>
          <h2 className={style.TitleLeft}>RECENT NEWS</h2>
          <div className={style.LeftCustomIcon}></div>
          {/* =============For Top Section======================= */}
          <div className={style.ImageContainer}>
            {images.slice(currentImage, currentImage + 1).map((obj) => (
              <div className={style.ImageContent} key={obj.id}>
                <div>
                  <img className={style.Image} src={obj.image} alt="avatar" />
                </div>
                <div className={style.TitleNDescriptionDiv}>
                  <h4 className={style.ImageTitle}>{obj.title}</h4>
                  <p className={style.ImageDescription}>{obj.description}</p>
                </div>
              </div>
            ))}
            <div className={style.Buttons}>
              <button className={style.PrevButton} onClick={Prev}>
                Prev
              </button>
              <button className={style.NextButton} onClick={Next}>
                Next
              </button>
            </div>
            {/* ================For Bottom Section====================== */}
            <div className={style.BottomContainer}>
              {allImages.slice(pageNumber, pageNumber + 2).map((obj) => (
                <div className={style.BottomContent} key={obj.id}>
                  <div className={style.BottomImageDiv}>
                    <img className={style.imageTwo} src={obj.imageTwo} alt="avatar" />
                  </div>
                  <div>
                    <h4 className={style.BottomContentTitle}>{obj.titleTwo}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.CustomLeftBottomBorder}></div>
          </div>
        </div>
        <div className={style.TitleRightDiv}>
          <h2 className={style.TitleRight}>UPCOMING EVENT</h2>
          <div className={style.RightCustomIcon}></div>
          <div className={style.RightSectionContainer}>
            <div>
              <div className={style.singleIconDiv}>
                <i>{<BsFillCloudFill className={style.icons} />}</i>
                <div>
                  <h5 className={style.iconTitle}>FIGHTING POLLUTION</h5>
                  <span className={style.iconDescription}>At least 19 people have died with dozens missing after a landslide in Malaysia.</span>
                  <a className={style.seeMore} href="#">
                    See More
                  </a>
                </div>
              </div>
              <div className={style.singleIconDiv}>
                <i>{<BsGearFill className={style.icons} />}</i>
                <div>
                  <h5 className={style.iconTitle}>FIGHTING CLIMATES</h5>
                  <span className={style.iconDescription}>At least 19 people have died with dozens missing after a landslide hit a camping site in Malaysia.</span>
                  <a className={style.seeMore} href="#">
                    See More
                  </a>
                </div>
              </div>
              <div className={style.singleIconDiv}>
                <i>{<BsSunFill className={style.icons} />}</i>
                <div>
                  <h5 className={style.iconTitle}>FIGHTING POLLUTION</h5>
                  <span className={style.iconDescription}>At least 19 people have died with dozens missing after a landslide hit a camping site in Malaysia.</span>
                  <a className={style.seeMore} href="#">
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className={style.singleIconDiv}>
                <i>{<BsSunsetFill className={style.icons} />}</i>
                <div>
                  <h5 className={style.iconTitle}>FIGHTING POVERTY</h5>
                  <span className={style.iconDescription}>At least 19 people have died with dozens missing after a landslide hit a camping.</span>
                  <a className={style.seeMore} href="#">
                    See More
                  </a>
                </div>
              </div>
              <div className={style.singleIconDiv}>
                <i>{<BsPinMapFill className={style.icons} />}</i>
                <div>
                  <h5 className={style.iconTitle}>FIGHTING NATION</h5>
                  <span className={style.iconDescription}>At least 19 people have died with dozens missing after a landslide hit a camping site in Malaysia.</span>
                  <a className={style.seeMore} href="#">
                    See More
                  </a>
                </div>
              </div>
              <div className={style.singleIconDiv}>
                <i>{<BsGlobe className={style.icons} />}</i>
                <div>
                  <h5 className={style.iconTitle}>FIGHTING SURVIVE</h5>
                  <span className={style.iconDescription}>At least 19 people have died with dozens missing after a landslide hit a camping site in Malaysia.</span>
                  <a className={style.seeMore} href="#">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
