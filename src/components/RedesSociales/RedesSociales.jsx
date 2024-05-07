import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import css from "./RedesSociales.module.scss";

export const RedesSociales = () => {
  return (
    <div className={css.containerredessociales}>
      <a href="https://www.instagram.com/" target={"_blank"} rel="noreferrer">
        <PiInstagramLogoFill size={35} color="black" />
      </a>
      <a href="https://wa.me/+59175124608" target={"_blank"} rel="noreferrer">
        <IoLogoWhatsapp size={35} color="black" />
      </a>
      <a href="https://www.facebook.com/" target={"_blank"} rel="noreferrer">
        <FaFacebook size={35} color="black" />
      </a>
      <FaTwitter size={35} color="black" />
    </div>
  );
};
