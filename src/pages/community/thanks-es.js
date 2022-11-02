import React from "react";
import Seo from '../../components/seo';
import Nav from "../../components/Nav";
import { StaticImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export default () => (
  <>
    <Seo title="¡Gracias!" />
    <Nav />
    <div className="text-container">
    <StaticImage src="../../images/Resources/Pics/404/jamila2.jpg" alt="logo" className="header-img" />
      <div className="content-text">
        <h1>¡Gracias por compartir!</h1>
        <p>Leeré tu historia y te contestaré a la brevedad.</p>
      </div>
    </div>
  </>
);
