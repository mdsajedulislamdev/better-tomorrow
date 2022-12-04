import React from "react";
import style from "./Think.module.css";
import girlOne from "../../../src/images/girl1.png";
import girlTwo from "../../../src/images/girl2.png";
import Man from "../../../src/images/man.png";

const Think = () => {
  return (
    <div className={style.thinkDiv}>
      <div>
        <h1 className={style.title}>
          WHAT PEOPLE <span className={style.thinkText}>THINK</span>
        </h1>
        <p className={style.titleDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore, deleniti,
          <br /> numquam, incidunt ullam voluptate at accusantium.
        </p>
      </div>
      <div className={style.mainContent}>
        <div className={style.content}>
          <h1 className={style.name}>TEENA JASON</h1>
          <h3 className={style.nameTitle}>DEVELOPER</h3>
          <p className={style.speech}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum illum facilis, repudiandae minima harum tempore inventore mollitia eligendi excepturi libero, cumque illo molestias nisi.
            Itaque dolor officia expedita, error hic pariatur saepe eum dolore atque autem quis architecto voluptatem est nihil ipsam eligendi sed optio laboriosam odit mollitia doloribus.
          </p>
          <img className={style.image} src={girlOne} alt="avatar" />
        </div>
        <div className={style.content}>
          <h1 className={style.name}>MELINA MILLER</h1>
          <h3 className={style.nameTitle}>DESIGNER</h3>
          <p className={style.speech}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum illum facilis, repudiandae minima harum tempore inventore mollitia eligendi excepturi libero, cumque illo molestias nisi.
            Itaque dolor officia expedita, error hic pariatur saepe eum dolore atque autem quis architecto voluptatem est nihil ipsam eligendi sed optio laboriosam odit mollitia doloribus.
          </p>
          <img className={style.image} src={Man} alt="avatar" />
        </div>
        <div className={style.content}>
          <h1 className={style.name}>MILAR MARINA</h1>
          <h3 className={style.nameTitle}>DEVELOPER</h3>
          <p className={style.speech}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum illum facilis, repudiandae minima harum tempore inventore mollitia eligendi excepturi libero, cumque illo molestias nisi.
            Itaque dolor officia expedita, error hic pariatur saepe eum dolore atque autem quis architecto voluptatem est nihil ipsam eligendi sed optio laboriosam odit mollitia doloribus.
          </p>
          <img className={style.image} src={girlTwo} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Think;
