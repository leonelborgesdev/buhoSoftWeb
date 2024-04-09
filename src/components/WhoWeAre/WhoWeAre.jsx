import React from "react";
import teamProgramers from "../../assets/teamProgramers.jpg";
import { WhoWeAreParagra } from "../../utils/data";
import css from "./WhoWeAre.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../utils/motion.js";

const WhoWeAre = () => {
  return (
    <section className={css.wrapper}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        <motion.div variants={textVariant(0.5)} className={css.leftSide}>
          <img src={teamProgramers} alt="" />
        </motion.div>
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
