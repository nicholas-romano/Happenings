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
      <div className="container-fluid">
        <hr></hr>
        <h1 className="contactTitle">About and Contacts</h1>
        <hr></hr>
        This app was created as part of the UNC Full Stack Developer Bootcamp
        program. The following individuals contributed to this project:
        <br></br>
        <ul>
          <li>
            Richard Kessler: &nbsp;
            <a
              href="https://github.com/RichardKessler"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"https://github.com/RichardKessler"}
            </a>
          </li>

          <li>
            Nicholas Romano: &nbsp;
            <a
              href="https://github.com/nicholas-romano"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"https://github.com/nicholas-romano"}
            </a>
          </li>
          <li>
            Eddie Saunders: &nbsp;
            <a
              href="https://github.com/SaundersEddie"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"https://github.com/SaundersEddie"}
            </a>
          </li>
          <li>
            Jason Vernot: &nbsp;
            <a
              href="https://github.com/jvernot"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"https://github.com/jvernot"}
            </a>
          
          </li>
          <li>
            Tevin Ward: &nbsp;
            <a
              href="https://github.com/TevinWard7"
              target="_blank"
              rel="noopener noreferrer"
            >
            {"https://github.com/TevinWard7"}
            </a>
          </li>
        </ul>
        <hr></hr>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
