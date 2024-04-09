import React from "react";
import teamProgramers from "../../assets/teamProgramers.jpg";
import { WhoWeAreParagra } from "../../utils/data";
import css from "./WhoWeAre.module.scss";

const WhoWeAre = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        <div className={css.rightSide}>
          <span className="secondaryText">Quienes Somos</span>
          <span className="primaryText">Somos Desarrolladores Web</span>
          {console.log(WhoWeAreParagra)}
          {WhoWeAreParagra.map((paragraph, i) => {
            return (
              <span className="secondaryText" key={i}>
                {paragraph}
              </span>
            );
          })}
        </div>
        <div className={css.leftSide}>
          <img src={teamProgramers} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
