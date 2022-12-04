import React from "react";
import style from "./Providing.module.css";
import book from "../../../src/images/book.png";
import child from "../../../src/images/child.png";
import school from "../../../src/images/school.png";
import care from "../../../src/images/healthcare.png";
import training from "../../../src/images/training.png";
import food from "../../../src/images/food.jpg";

const Providing = () => {
  return (
    <div className={style.providing}>
      <h1 className={style.title}>
        WE ARE <span className={style.providingText}>PROVIDING</span>
      </h1>
      <div className={style.mainContentDiv}>
        <div className={style.content}>
          <h3 className={style.heading}>We providing cloth for poor children</h3>
          <img className={style.image} src={child} alt="book" />
          <p className={style.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.
          </p>
          <button className={style.button}>Donate Now</button>
        </div>
        <div className={style.content}>
          <h3 className={style.heading}>We building school for poor children</h3>
          <img className={style.image} src={school} alt="book" />
          <p className={style.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.
          </p>
          <button className={style.button}>Donate Now</button>
        </div>
        <div className={style.content}>
          <h3 className={style.heading}>We providing books for poor children</h3>
          <img className={style.image} src={book} alt="book" />
          <p className={style.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.
          </p>
          <button className={style.button}>Donate Now</button>
        </div>
        <div className={style.content}>
          <h3 className={style.heading}>We providing healthcare for poor children</h3>
          <img className={style.image} src={care} alt="care" />
          <p className={style.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.
          </p>
          <button className={style.button}>Donate Now</button>
        </div>
        <div className={style.content}>
          <h3 className={style.heading}>We providing internet training for poor people</h3>
          <img className={style.image} src={training} alt="training" />
          <p className={style.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.
          </p>
          <button className={style.button}>Donate Now</button>
        </div>
        <div className={style.content}>
          <h3 className={style.heading}>We providing food for poor children</h3>
          <img className={style.image} src={food} alt="food" />
          <p className={style.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Commodi labore reprehenderit ratione necessitatibus facere magnam repudiandae, exercitationem ut id delectus.
          </p>
          <button className={style.button}>Donate Now</button>
        </div>
      </div>
    </div>
  );
};

export default Providing;
