import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
const Experties = () => {
  return (
    <section className={css.wrapper}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >
                <div style={{ background: exp.bg }} className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* right */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="secondaryText">¿En Que Te Ayudamos?</span>
          <span className="primaryText">
            <span className={css.shadow}>Te Ayudamos</span> a crear el cambio en
            tu negocio.
          </span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {paragraph}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;
