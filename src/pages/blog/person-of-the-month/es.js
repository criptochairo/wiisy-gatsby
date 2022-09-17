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
        <Seo title="Persona del mes" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/wreath.png" alt="logo" className="blog-img" />
            <h1>La persona <i>¿Y si digo que sí?</i> del mes</h1> <br />

            <React.Fragment>
              {/* eslint-disable-next-line */}
              <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p className="content-text">

                  En esta sección quiero compartir con ustedes las historias de la gente que he conocido y que ejemplifica perfectamente la filosofía del <b>"¿y si digo que sí!"</b>.
                  <br /><br />
                  Conocerán a personas que, en distintos momentos de sus vidas, se han atrevido a decir que <i><b>¡sí!</b></i> y han iniciado proyectos de lo más interesantes.
                  <br /><br />
                  Son la gente que me inspira a seguir adelante y que me recuerda que vale la pena vivir.
                  <br /><br />
                  Espero que este espacio los inspire a expresar lo mejor de sí mismos en las distintas áreas de su interés.
                  <br /><br />
                  ¡Buena suerte!<br /><br /><br /><br />
                      
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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-photography/es"><h2>Siguiente sección</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/moment-of-last-month/es"><h2>Sección anterior</h2></Link></button>
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
      filter: {frontmatter: {section: { eq: "potm-es" } } },
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