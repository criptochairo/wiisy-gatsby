import React from "react"
import Nav from "../../components/NavEs"
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../../components/seo'

function Contact() {
    return (
        <div className="text-container">
            <Seo title="Contáctenme" />
            <Nav />
            <StaticImage src="../../images/Resources/Pics/181.JPEG" alt="logo" className="header-img" />
            <h1>Contáctenme</h1><br />

            <p className="content-text" id="contact">

                <strong>E-mail:</strong>
                <br /><br />
                
                <a href="mailto: whatifisayyes2021@gmail.com" id="mail">whatifisayyes2021@gmail.com<br /><br /></a> 

                Con gusto leeré sus comentarios, preguntas, dudas y demás y les contestaré lo más pronto que pueda.<br /><br />

                ¡Soy toda oídos!

            </p>

            
        </div>
    )
}

export default Contact;