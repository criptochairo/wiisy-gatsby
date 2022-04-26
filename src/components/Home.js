import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "./Nav"
import Seo from "./seo"

const Home = () => {
    return (
        <div id="content-page">
            <Seo title="Home" />
            <Nav />
            <div className="title-container" id="header">
                <Link style={{ color: 'black' }} to="/es"><StaticImage src="../images/Resources/Icons/mexico.png" alt="mexico-flag" id="flag"/></Link>
            </div>

            
            <div className="section-container">
                <Link to="/what-if-i-say-yes/en"><StaticImage src="../images/Resources/Icons/logo-final.jpeg" alt="wiisy" /></Link>
                <Link style={{ color: 'black' }} to="/what-if-i-say-yes/en"><h2>What If I Say Yes?</h2></Link>
                <p className="container-text">Read my brother's original text, which gave me the idea to create this website.</p>
            </div>
            
            <div className="section-container">
                <Link to="/about-me/en"><StaticImage src="../images/Resources/Pics/210.JPEG" alt="about-me" /></Link>
                <Link style={{ color: 'black' }} to="/about-me/en"><h2>About Me</h2></Link>
                <p className="container-text">Hello! My name is Lucía Cárdenas. Click <Link style={{ color: 'black' }} to="/about-me/en">here</Link> to learn why I decided to create this website.</p>
            </div>

            <div className="section-container">
                <Link to="/blog/en"><StaticImage src="../images/Resources/Pics/503.jpg" alt="blog" /></Link>
                <Link style={{ color: 'black' }} to="/blog/en"><h2>Blog</h2></Link>
                <p className="container-text">Here you will see how I have said <b>yes!</b> to life. Come in, read and get inspired to start doing your thing.</p>
            </div>
            
            <div className="section-container">
                <Link to="/community/en"><StaticImage src="../images/Resources/Pics/544.JPEG" alt="community-board" /></Link>
                <Link style={{ color: 'black' }} to="/community/en"><h2>Community Board</h2></Link>
                <p className="container-text">This is a space to learn from others and for others to learn from you. Come in and share your experiences!</p>
            </div>

            <div className="section-container" id="contact-me">
                <Link to="/contact/en"><StaticImage src="../images/Resources/Pics/181.JPEG" alt="contact-me" /></Link>
                <Link style={{ color: 'black' }} to="/contact/en"><h2>Contact Me</h2></Link>
                <p className="container-text">I'm all ears. Would you send me your questions and comments?</p>
            </div>

            <div className="footer">
            <h3>Subscribe to receive my weekly email newsletter. It will inspire you to try new things by allowing yourself to say YES! Coming soon...</h3><br /><br />
            </div>
            
        </div>
    )
}

export default Home;

