import React from "react";
import css from "./Experties.module.scss";
import { projectExperience } from "../../utils/data";
import { WhatDoIHelp } from "../../utils/data";

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className="flexCenter" style={{ background: exp.bg }}>
                  <exp.icon size={30} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span>{exp.projects}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={css.rightSide}>
          <span className="primaryText">En Que Te Ayudamos?</span>
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span className="secondaryText" key={i}>
                {paragraph}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experties;
