// Testing routing
//
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./contact.css";
import gitHubIcon from "../../assets/gitHubLogo.png";
import emailIcon from "../../assets/emailIcon.png";
import linkedinIcon from "../../assets/linkedInIcon.png";
import facebookIcon from "../../assets/facebookIcon.png";

const Contact = () => {
  return (
    <>
      <Header />
      <hr></hr>
      <h1 className="contactTitle">About and Contacts</h1>
      <hr></hr>
      This app was created as part of the UNC Full Stack Developer Boot Camp
      program. The following individuals contributed to this project:
      <br></br>
      <ul>
        <li>
          Richard Kessler
          <a
            href="https://github.com/RichardKessler"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={gitHubIcon} alt="git hub logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={linkedinIcon} alt="linked in logo" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={facebookIcon} alt="facebook logo" />
          </a>
          <a href="mailto:noemail@noemail.com">
            {" "}
            <img src={emailIcon} alt="email logo" />
          </a>
        </li>

        <li>
          Nicholas Romano
          <a
            href="https://github.com/nicholas-romano"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={gitHubIcon} alt="git hub logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={linkedinIcon} alt="linked in logo" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={facebookIcon} alt="facebook logo" />
          </a>
          <a href="mailto:noemail@noemail.com">
            {" "}
            <img src={emailIcon} alt="email logo" />
          </a>
        </li>

        <li>
          Eddie Saunders
          <a
            href="https://github.com/SaundersEddie"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={gitHubIcon} alt="git hub logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={linkedinIcon} alt="linked in logo" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={facebookIcon} alt="facebook logo" />
          </a>
          <a href="mailto:noemail@noemail.com">
            {" "}
            <img src={emailIcon} alt="email logo" />
          </a>
        </li>

        <li>
          Jason Vernot
          <a
            href="https://github.com/jvernot"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={gitHubIcon} alt="git hub logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={linkedinIcon} alt="linked in logo" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={facebookIcon} alt="facebook logo" />
          </a>
          <a href="mailto:noemail@noemail.com">
            {" "}
            <img src={emailIcon} alt="email logo" />
          </a>
        </li>

        <li>
          Tevin Ward
          <a
            href="https://github.com/TevinWard7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={gitHubIcon} alt="git hub logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={linkedinIcon} alt="linked in logo" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={facebookIcon} alt="facebook logo" />
          </a>
          <a href="mailto:noemail@noemail.com">
            {" "}
            <img src={emailIcon} alt="email logo" />
          </a>
        </li>
      </ul>
      <hr></hr>
      <a
        href="https://github.com/SaundersEddie/Happenings"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to github repository
      </a>
      <hr></hr>
      <Footer />
    </>
  );
};

export default Contact;
