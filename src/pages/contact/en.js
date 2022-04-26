import React from "react"
import Nav from "../../components/Nav"
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../../components/seo'

function Contact() {
    return (
        <div className="text-container">
            <Seo title="Contact Me" />
            <Nav />
            <StaticImage src="../../images/Resources/Pics/181.JPEG" alt="logo" className="header-img" />
            <h1>Contact Me</h1><br />

            <p className="content-text" id="contact">

                <strong>E-mail:</strong>
                <br /><br />
                
                <a href="mailto: whatifisayyes2021@gmail.com" id="mail">whatifisayyes2021@gmail.com<br /><br /></a> 

                I will gladly read your comments, questions, doubts, and more, and I will answer you as soon as I can.<br /><br />

                I'm all ears!

            </p>

            
        </div>
    )
}

export default Contact;