import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

export const Contacto = () => {
  const form = useRef();
  const handleEnviarEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmailMessage",
        "template_6n5qu8p",
        form.current,
        "lna8Tsiq7_5RTw76n"
      )
      .then(
        (result) => {
          console.log(result);
          alert("mensage enviado correctamente");
        },
        (error) => {
          console.log(error);
          alert(error);
        }
      );
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={handleEnviarEmail}>
      <div className="container_all_contact" id={"light"}>
        <div className="container_body_contact">
          <div className="inputBox">
            <input type="text" required="required" name="name" />
            <span>{"Name"}</span>
          </div>
          <div className="inputBox">
            <input type="text" required="required" name="email" />
            <span>Email</span>
          </div>
          <div className="inputBox">
            <textarea name="message" />
            <span>{"Messegge"}</span>
          </div>
          <div className="buton_submit_send">
            <input type="submit" value={"Send"} />
          </div>
        </div>
      </div>
    </form>
  );
};
