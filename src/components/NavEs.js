import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

function Nav() {
    return (
        <div className="overlay">
        <nav>
        <Link to="/"><StaticImage src="../images/Resources/Icons/logo-final-es.jpg" alt="Logo" className="navimg"/></Link>   
            <ul className="nav-links">
                <Link style={{ color: 'black'}} to="/es"><li>· Página principal</li></Link>
                <Link style={{ color: 'black'}} to="/what-if-i-say-yes/es"><li>· ¿Y si digo que sí?</li></Link>
                <Link style={{ color: 'black'}} to="/about-me/es"><li>· Acerca de mí</li></Link>
                <Link style={{ color: 'black'}} to="/blog/es"><li>· Blog</li></Link>
                <Link style={{ color: 'black'}} to="/community/es"><li>· Pizarrón comunitario</li></Link>
                <Link style={{ color: 'black'}} to="/contact/es"><li>· Contáctenme</li></Link>
                <Link style={{ color: 'black'}} to="/"><li>· English</li></Link>
            </ul>
        <Link to="/" id="logo-2"><StaticImage src="../images/Resources/Icons/logo-final-es.jpg" alt="Logo" className="navimg"/></Link>
        </nav>
        </div>
    )
}

export default Nav;