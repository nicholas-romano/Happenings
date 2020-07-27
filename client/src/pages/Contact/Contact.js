// Testing routing
//
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./contact.css";

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
          <a href="https://github.com/RichardKessler" target="_blank">
            Richard Kessler
          </a>
        </li>
        <li>
          <a href="https://github.com/nicholas-romano" target="_blank">
            Nicholas Romano
          </a>
        </li>
        <li>
          <a href="https://github.com/SaundersEddie" target="_blank">
            Eddie Saunders
          </a>
        </li>
        <li>
          <a href="https://github.com/jvernot" target="_blank">
            Jason Vernot
          </a>
        </li>
        <li>
          <a href="https://github.com/TevinWard7" target="_blank">
            Tevin Ward
          </a>
        </li>
      </ul>
      <hr></hr>
      <a href="https://github.com/SaundersEddie/Happenings" target="_blank">
        Link to github repository
      </a>
      <hr></hr>
      <Footer />
    </>
  );
};

export default Contact;
