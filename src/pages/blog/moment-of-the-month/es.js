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
        <Seo title="Momento del Mes Pasado" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/month.png" alt="logo" className="blog-img" />
            <h1>Momento del mes pasado</h1> <br />

            <React.Fragment>

              {/* eslint-disable-next-line */}
              <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p className="content-text">

                  El momento del mes es una sección que estará a cargo de mi hija Maya y mi esposo Carlos. 
                  <br /><br />
                  Querían participar en este espacio y dije que <b><i>¡sí!</i></b> <span role="img" aria-label="smile">😄</span>
                  <br /><br />
                  Aquí van a hablar de algún momento del mes que se les hizo crítico, divertido, interesante, curioso y demás.
                  <br /><br />
                  Es un espacio para animarlos a ustedes a reflexionar sobre cómo vivieron el mes que pasó y a elegir un momento que quieran recordar por siempre.
                  <br /><br />
                  Maya y Carlos esperan que les guste lo que van a compartir con ustedes.
                  <br /><br /><br /><br />
                      
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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/person-of-the-month/es"><h2>Siguiente sección</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/abuelita-recommends/es"><h2>Sección anterior</h2></Link></button>
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
      filter: {frontmatter: {section: { eq: "motm-es" } } },
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