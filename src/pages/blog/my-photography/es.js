import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "../../../components/Nav"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import { graphql } from "gatsby"

function Photography({ data, location }) {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    return (
        <Layout location={location} title={siteTitle}>
        <Seo title="Mis fotografías" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/camera.png" alt="logo" className="blog-img" />
            <h1>Mis fotografías</h1> <br />

            <p className="content-text">

                En diciembre del 2020 comencé a <b>tomar fotografías</b> durante mis caminatas diarias al aire libre. Era mi forma de procesar mi estrés después de varios meses de estar en casa por la pandemia. Tomar fotos me hizo <b>observar</b> más de cerca lo que la naturaleza tiene que ofrecer.
                <br /><br />
                Empecé a <b>ver</b> las cosas de una manera nueva. Me tomé mi tiempo para respirar, procesar y disfrutar la vida mirando y estando con la naturaleza.
                <br /><br />
                Y luego, un día pensé: ¿qué pasaría si empiezo a compartir mis fotos con las personas que amo? Y no solo eso. ¿Qué tal que creara una experiencia divertida para esas personas? Es así como decidí compartir mis fotos agregándoles una frase descriptiva y creativa.   
                <br /><br />
                En este blog podrán ver lo que he estado viendo desde entonces y podrán leer los subtítulos que se me ocurrieron. 
                <br /><br />
                Espero inspirarlos a comenzar a ver su mundo desde un lente diferente… uno que sea más atento, paciente, amoroso y comprensivo. 
                <br /><br />
                Si lo hacen, les puedo asegurar que comenzarán a sentirse mejor sobre sus propias vidas.
                <br /><br />
                
                <br /><p style={{ textAlign: 'center' }}>------------------------</p><br /> 

                <i>January 11, 2022</i> <br /><br />


                I took more than 500 photographs on my daily walks. Over time I improved my eye and my attention to detail. I began to see with the eyes of a photographer and then when I saw something beautiful in nature, I immediately framed it in my mind, even before taking out the phone to use the camera. <br/><br/>
                
                My photos from the beginning are interesting but are missing something. <br/><br/>
                
                The last ones I like a lot and since it seems that the people with whom I shared them also liked them, we decided that one day we are going to offer them here, on this website, in a little store.<br/><br/>

                The idea is that whoever likes my photographs can buy and download them as a digital file and then use them however they want.<br/><br/>

                I will tell you here how we are progressing with this project.<br/><br/>
                
                In the meantime, here is a sample of what I photographed from December 13, 2020, to December 13, 2021:<br/><br/><br/><br/>
            

                <div className="post-img-container">
                    <i><b>Enero</b></i><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/jan.jpg" alt="logo" />
                    <i>“Una piedra en el camino me enseñó que…”</i><br />
                    ------------------------<br /><br />
                    <i><b>Febrero</b></i><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/feb.jpg" alt="logo" />
                    <i>“Alfombra otoñal…”</i><br />
                    ------------------------<br /><br />
                    <i><b>Marzo</b></i><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/mar.jpg" alt="logo" />
                    <i>“La naturaleza también sonríe…”</i><br />
                    ------------------------<br /><br />
                    <i><b>Abril</b></i><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/apr.jpg" alt="logo" />
                    <i>“Dos estaciones al mismo tiempo”</i><br />
                </div>

                <br/><br/>

                <Link className="link" style={{ color: 'black' }} to="/blog/es"><h2>Regresar al blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast/es"><h2>Siguiente sección</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month/es"><h2>Sección anterior</h2></Link>
                <br />
                               
            </p>

        </div> 
    </div>
    </Layout>

    )
}

export default Photography;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`