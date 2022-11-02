import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react";

function Nav() {
    const [showText, setShowText] = useState(false);
    return (<>
        <nav>
        <Link to="/"><StaticImage src="../images/Resources/Icons/logo-final.jpeg" alt="Logo" className="navimg"/></Link>   
            <ul>
                <Link className="nav-link" style={{ color: 'black'}} to="/"><li>· Home</li></Link>
                <Link className="nav-link" style={{ color: 'black'}} to="/what-if-i-say-yes/en"><li>· What If I Say Yes?</li></Link>
                <Link className="nav-link" style={{ color: 'black'}} to="/about-me/en"><li>· About Me</li></Link>
                <Link className="nav-link" style={{ color: 'black'}} to="/blog/en"><li>· Blog</li></Link>
                <Link className="nav-link" style={{ color: 'black'}} to="/community/en"><li>· Community Board</li></Link>
                <Link className="nav-link" style={{ color: 'black'}} to="/contact/en"><li>· Contact Me</li></Link>
                <Link className="nav-link" style={{ color: 'black'}} to="/es"><li>· Español</li></Link>
            </ul>

            <React.Fragment>
                <button id="button-55-2" aria-label='show-text' onClick={() => setShowText(!showText)}><StaticImage src="../images/Resources/Icons/menu.png" alt="Logo" className="dropdown-icon" /></button><br />
                {showText &&
                <p className="dropdown-text">
                        
                    <Link className="dropdown-link" style={{ color: 'black'}} to="/"><li>· Home</li></Link>
                    <Link className="dropdown-link" style={{ color: 'black'}} to="/what-if-i-say-yes/en"><li>· What If I Say Yes?</li></Link>
                    <Link className="dropdown-link" style={{ color: 'black'}} to="/about-me/en"><li>· About Me</li></Link>
                    <Link className="dropdown-link" style={{ color: 'black'}} to="/blog/en"><li>· Blog</li></Link>
                    <Link className="dropdown-link" style={{ color: 'black'}} to="/community/en"><li>· Community Board</li></Link>
                    <Link className="dropdown-link" style={{ color: 'black'}} to="/contact/en"><li>· Contact Me</li></Link>
                    <Link className="dropdown-link" style={{ color: 'black'}} to="/es"><li>· Español</li></Link>
                        
                </p>

                    }
                
            </React.Fragment>
        </nav>

        
        <div className="dropdown-wrapper">
            
        </div>
        </>
    )
}

export default Nav;