import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

function Nav() {
    return (
        <div className="overlay">
        <nav>
        <Link to="/"><StaticImage src="../images/Resources/Icons/logo-final.jpeg" alt="Logo" className="navimg"/></Link>   
            <ul className="nav-links">
                <Link style={{ color: 'black'}} to="/"><li>· Home</li></Link>
                <Link style={{ color: 'black'}} to="/what-if-i-say-yes/en"><li>· What If I Say Yes?</li></Link>
                <Link style={{ color: 'black'}} to="/about-me/en"><li>· About Me</li></Link>
                <Link style={{ color: 'black'}} to="/blog/en"><li>· Blog</li></Link>
                <Link style={{ color: 'black'}} to="/community/en"><li>· Community Board</li></Link>
                <Link style={{ color: 'black'}} to="/contact/en"><li>· Contact Me</li></Link>
                <Link style={{ color: 'black'}} to="/es"><li>· Español</li></Link>
            </ul>
        <Link to="/" id="logo-2"><StaticImage src="../images/Resources/Icons/logo-final.jpeg" alt="Logo" className="navimg"/></Link>
        </nav>
        </div>
    )
}

export default Nav;