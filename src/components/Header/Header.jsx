import React from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";

const Header = () => {
  // Asegúrate de exportar el componente como default
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Logo</div>
        <ul className={`flexCenter ${css.menu}`}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Header;
