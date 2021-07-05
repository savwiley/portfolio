import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import emailjs from 'emailjs-com';

const Footer = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    //selectors
    const randNumb = document.querySelector("input[name=randNumb]");
    const name = document.querySelector("input[name=user_name]");
    const email = document.querySelector("input[name=user_email]");
    const subBtn = document.querySelector("input[type=submit]");
    const mess = document.querySelector("textarea");

    //gives email random number
    randNumb.value = Math.floor(Math.random() * 100000);

    //sends email
    emailjs.sendForm('service_testing', 'contact_form', e.target, 'user_0T8QGFmjHt9TioWTRdFvY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      //resets values
      name.value = "";
      email.value = "";
      mess.value = "";
      subBtn.value = "Message Sent!";
      const changeVal = () => {
        subBtn.value = "Send";
      };
      setTimeout(changeVal, 3000);
  }

  return(
    <>
    <div id="footer">
      <form className="contact-form" onSubmit={sendEmail}>
        <span>Contact Me</span>
        <input type="hidden" name="randNumb" />
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>

      <a
        href="https://github.com/savwiley/portfolio"
        data-tip="See the Code That Built This Site"
        alt="See the Code That Built This Site"
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
    </div>
    </>
  )
}

export default Footer;