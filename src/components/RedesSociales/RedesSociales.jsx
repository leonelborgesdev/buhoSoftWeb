import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import css from "./RedesSociales.module.scss";

export const RedesSociales = () => {
  return (
    <div className={css.containerredessociales}>
      <FaTwitter size={35} color="black" />
      <FaFacebook size={35} color="black" />
      <IoLogoWhatsapp size={35} color="black" />
      <PiInstagramLogoFill size={35} color="black" />
    </div>
  );
};
