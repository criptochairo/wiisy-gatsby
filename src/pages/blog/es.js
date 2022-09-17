import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Social from '../../images/Resources/Icons/camera.png'
import Microphone from '../../images/Resources/Icons/microphone.png'
import Book from '../../images/Resources/Icons/book.png'
import Mom from '../../images/Resources/Icons/motherhood.png'
import Sister from '../../images/Resources/Icons/twins.png'
import Grandma from '../../images/Resources/Icons/grandma.png'
import Week from '../../images/Resources/Icons/month.png'
import Prize from '../../images/Resources/Icons/wreath.png'
import GoTop from "../../components/GoTop"
import NavEs from "../../components/NavEs"
import Seo from "../../components/seo"


function Blog() {
    return (
        
        <div className="text-container"> 
        <Seo title="Blog" />
        <NavEs />
        <StaticImage src="../../images/Resources/Pics/503.jpg" alt="wiisy-logo" className="header-img" />
            <h1>Blog</h1>
            
            <p className="content-text">Aquí escribo sobre mis proyectos más recientes después de haber pasado por el proceso <b><i>¿Y si digo que sí?</i></b><br /><br />

            Este es mi espacio para inspirarlos a crear su propio espacio después de haber dicho que <u><b><i>sí</i></b></u> a su alma creativa.<br /><br /><br /></p>

            <ul className="blog-list">
                <div className="blog-container">
                    <Link to="/blog/my-photography/es"><img src={Social} alt="my-photography" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-photography/es"><h2>Mis fotografías</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-podcast/es"><img src={Microphone} alt="my-podcast" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-podcast/es"><h2>Mi pódcast</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-book/es"><img src={Book} alt="my-book" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-book/es"><h2>Libro con mi hermano gemelo</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/projects-with-my-daughter/es"><img src={Mom} alt="my-projects" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/projects-with-my-daughter/es"><h2>Proyectos con mi hija</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-sisters-advice/es"><img src={Sister} alt="my-sister" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-sisters-advice/es"><h2>Consejos de mi hermana</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/abuelita-recommends/es"><img src={Grandma} alt="my-mom" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/abuelita-recommends/es"><h2>Abuelita recomienda</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/moment-of-last-month/es"><img src={Week} alt="motm" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/moment-of-last-month/es"><h2>Momento del mes pasado</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/person-of-the-month/es"><img src={Prize} alt="person-of-the-month" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/person-of-the-month/es"><h2>La persona <i>¿Y si digo que sí?</i> del mes</h2></Link>
                </div>
                
            </ul>

            <GoTop />
            
        </div>
    )
}

export default Blog;