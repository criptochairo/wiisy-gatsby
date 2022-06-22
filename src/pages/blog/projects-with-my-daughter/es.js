import React, {useState} from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "../../../components/Nav"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import { graphql } from "gatsby"

function Photography({ data, location }) {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const posts = data.allMarkdownRemark.nodes;
    const lastPost = posts[0];
    const [showText, setShowText] = useState(false);
    let buttonText
    if (!showText) {
      buttonText = "Haz click aquí para aprender más sobre esta sección"
    } else {
      buttonText = "Esconder texto"
    }

    

    return (
        <Layout location={location} title={siteTitle}>
        <Seo title="Proyectos con mi hija" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/motherhood.png" alt="logo" className="blog-img" />
            <h1>Proyectos con mi hija</h1> <br />

            <React.Fragment>
              {/* eslint-disable-next-line */}
              <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
                {showText &&
                  
                  <p className="content-text">

                    Uno de los rayitos de luz de la pandemia fue que encontré nuevas maneras de acercarme a mi hija Maya. Estar juntas durante varios meses fue todo un reto... hasta que un día descubrimos que podíamos crear cosas juntas.
                    <br /><br />
                    En el verano del 2021, varios de sus primos/as se graduaron de secundaria y preparatoria y para celebrar a la distancia hicimos un video con un personaje muy importante en la vida de Maya: Cookies.
                    <br /><br />
                    Es una osita que mi hermano Héctor le regaló el día que nació. Llegó al hospital con una pulserita de plástico rosa que decía "¡es una niña!" y con una osita preciosa a la que Maya bautizó más tarde como <b>Cookies</b> (sí, así, en plural).
                    <br /><br />
                    El video de Cookies tuvo tanto éxito que decidimos continuar haciendo y compartiendo más videos para celebrar el cumpleaños de alguien o para entretener a amigos pequeños.
                    <br /><br />
                    En este espacio compartiremos algunos de los videos que hemos creado juntas (Maya, Cookies y yo).
                    <br /><br />
                    Espero que los inspire a crear proyectos visuales y a ¡compartirlos con el mundo!
                    <br /><br /> <br /><br />
                    
                  <p style={{ textAlign: 'center' }}>------------------------</p>

                  </p>}
                
              </React.Fragment>

              <p class="content-text">
                
                <div>
                    <h1 className='post-title' >{lastPost.frontmatter.title}</h1>
                    <h4>{lastPost.frontmatter.date}</h4>
                    <p className='content-text'
                      dangerouslySetInnerHTML={{ __html: lastPost.html }}
                      itemProp="articleBody"></p>
                </div>

                <br />
                <p style={{ textAlign: 'center' }}>------------------------</p>
                <br />

                <i>Posts anteriores</i><br /><br />

                {
                    <ol style={{ listStyle: `none` }}>
                      {
                        posts.slice(1).map(post => {
                        const title = post.frontmatter.title || post.fields.slug
                        return (
                            <li key={post.fields.slug}>
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <header>
                                <h2>
                                    <Link to={post.fields.slug} itemProp="url">
                                    <span itemProp="headline">{title}</span>
                                    </Link>
                                </h2>
                                <small>{post.frontmatter.date}</small>
                                </header>
                                <section>
                                <p
                                    dangerouslySetInnerHTML={{
                                    __html: post.excerpt,
                                    }}
                                    itemProp="description"
                                />
                                </section>
                            </article>
                            </li>
                        )
                        })}
                    </ol>
                }

            </p>

          <button id='button-55' aria-label="back-to-blog"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/es"><h2>Regresar al blog</h2></Link></button>
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-sisters-advice/es"><h2>Siguiente sección</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-book/es"><h2>Sección anterior</h2></Link></button>

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
    allMarkdownRemark(
      filter: {frontmatter: {section: { eq: "projects-es" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        html
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`