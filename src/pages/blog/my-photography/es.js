import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "../../../components/Nav"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import { graphql } from "gatsby"

function Photography({ data, location }) {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const [showText, setShowText] = useState(false);
    let buttonText
    if (!showText) {
      buttonText = "Haz click aquí para aprender más sobre esta sección"
    } else {
      buttonText = "Esconder texto"
    }

    return (
        <Layout location={location} title={siteTitle}>
        <Seo title="Mis fotografías" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/camera.png" alt="logo" className="blog-img" />
            <h1>Mis fotografías</h1> <br />

            <React.Fragment>
              {/* eslint-disable-next-line */}
              <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p className="content-text"><br />

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

                <i>11 de enero del 2022</i> <br /><br />

                Tomé más de 500 fotografías en mis caminatas diarias. Con el tiempo fui mejorando mi ojo y mi atención al detalle. Empecé a ver con ojos de fotógrafa y entonces veía algo lindo en la naturaleza y enseguida lo enmarcaba en mi mente, aún antes de sacar el teléfono para usar la cámara.
                <br/><br/>
                Mis fotos del principio son interesantes, pero algo les faltaba.
                <br/><br/>
                Las últimas me gustan mucho y como parece ser que a las personas con las que las compartí también les gustaron, decidimos que algún día las vamos a ofrecer aquí, en este sitio web, en una tiendita.
                <br/><br/>
                La idea es que a quien le gusten mis fotografías las pueda comprar y bajar como archivo digital para luego usarlas como quiera.
                <br/><br/>
                Aquí les iré contando cómo vamos progresando con respecto a este proyecto.
                <br/><br/>
                Mientras tanto, he aquí una muestra de lo que fotografié del 13 de diciembre del 2020 al 13 de diciembre del 2021:

                </p>}

            </React.Fragment>

            <p className="content-text">           

                <div className="post-img-container">
                    <div className="post-img-container">
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Noviembre</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/nov.jpg" alt="logo" /><br />
                    <i>“Aretes de árbol…”</i><br />
                    </div>
                    ------------------------<br /><br />
                    <div className="post-img-container">
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Octubre</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/oct.jpg" alt="logo" /><br />
                    <i>“Con el corazón partido…”</i><br />
                    </div>
                    ------------------------<br /><br />
                    <div className="post-img-container">
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Septiembre</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/sep.jpg" alt="logo" /><br />
                    <i>“Cada semilla es una posibilidad…”</i><br />
                    </div>
                    ------------------------<br /><br />
                    <div className="post-img-container">
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Agosto</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/aug.jpg" alt="logo" /><br />
                    <i>“Iluminando el suelo…”</i><br />
                    </div>
                    ------------------------<br /><br />
                    <div className="post-img-container">
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Julio</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/july.jpg" alt="logo" /><br />
                    <i>“El comienzo de la vida”</i><br />
                    </div>
                    ------------------------<br /><br />
                    <div className="post-img-container">
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Junio</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/jun.jpg" alt="logo" /><br />
                    <i>“Caligrafía de la naturaleza…”</i><br />
                    </div>
                    ------------------------<br /><br />
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Mayo</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/may.jpg" alt="logo" /><br />
                    <i>“La madre de todas las hojas (de maple)…”</i><br />
                    ------------------------<br /><br />
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Abril</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/apr.jpg" alt="logo" /><br />
                    <i>“Dos estaciones al mismo tiempo”</i><br />
                    ------------------------<br /><br />
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Marzo</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/mar.jpg" alt="logo" /><br />
                    <i>“La naturaleza también sonríe…”</i><br />
                    ------------------------<br /><br />
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Febrero</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/feb.jpg" alt="logo" /><br />
                    <i>“Alfombra otoñal…”</i><br />
                    ------------------------<br /><br />
                    <h1 style={{fontSize: "2em", fontFamily: "Georgia"}}>Enero</h1><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/jan.jpg" alt="logo" /><br />
                    <i>“Una piedra en el camino me enseñó que…”</i><br />
                    ------------------------<br /><br />                    
                </div>
       
            </p>

          <button id='button-55' aria-label="back-to-blog"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/es"><h2>Regresar al blog</h2></Link></button>
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-podcast/es"><h2>Siguiente sección</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/person-of-the-month/es"><h2>Sección anterior</h2></Link></button>

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