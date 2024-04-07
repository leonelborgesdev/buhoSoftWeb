import React, { useState } from "react";
import css from "./Header.module.scss";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Logo</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
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
        <div
          className={css.menuIcon}
          onClick={() => {
            setMenuOpened((prev) => !prev);
          }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
