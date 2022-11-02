import React from "react";
import Seo from '../../components/seo';
import Nav from "../../components/Nav";
import { StaticImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export default () => (
  <>
    <Seo title="Thanks!" />
    <Nav />
    <div className="text-container">
    <StaticImage src="../../images/Resources/Pics/404/jamila2.jpg" alt="logo" className="header-img" />
      <div className="content-text">
        <h1>Thanks for reaching out!</h1>
        <p>I will read your story and get back to you shortly.</p>
      </div>
    </div>
  </>
);
