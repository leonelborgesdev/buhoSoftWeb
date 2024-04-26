import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import css from "./RedesSociales.module.scss";

export const RedesSociales = () => {
  return (
    <div className={css.containerredessociales}>
      <FaTwitter size={25} color="black" />
      <FaFacebook size={25} color="black" />
      <FaWhatsappSquare size={25} color="black" />
      <FaInstagram size={25} color="black" />
    </div>
  );
};
