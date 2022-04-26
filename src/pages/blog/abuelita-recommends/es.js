import React from "react"
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

    return (
        <Layout location={location} title={siteTitle}>
        <Seo title="Abuelita Recomienda" />
        <div className="aboutme-page">
          <Nav />
          <div className="blog-text-container"> 
          <StaticImage src="../../../images/Resources/Icons/grandma.png" alt="logo" className="blog-img" />
          <h1>Abuelita Recomienda</h1> <br />

          <p class="content-text">
          Mi mamá (sus nietos le dicen “Abuelita”) dedicó gran parte de su vida a criar a 3 hijos y 2 hijas, y luego a ayudar en la crianza de sus 3 nietas y 3 nietos. El tiempo que le quedaba para sí misma era mínimo y aun así siempre encontró la manera de mantener su curiosidad por aprender.
          <br /><br />
          Ahora que ya no estamos en casa y que puede disfrutar de su tiempo de manera más libre tiene una colección de recomendaciones enorme sobre libros, películas, documentales, lugares, etc.
          <br /><br />
          En este espacio quiero compartir sus recomendaciones con ustedes, como una manera de honrar toda esa memoria institucional que tiene en sus más de 70 vueltas alrededor del sol.
          <br /><br />
          Ojalá este espacio los anime a voltear la mirada a la gente con la que han compartido toda una vida y entablar conversaciones sobre las cosas que han aprendido en el curso de sus vidas.
          <br /><br />
              
          <p style={{ textAlign: 'center' }}>------------------------</p>
          
          <div>
              <h1>{lastPost.frontmatter.title}</h1>
              <h4>{lastPost.frontmatter.date}</h4>
              <p className='content-text'
                dangerouslySetInnerHTML={{ __html: lastPost.html }}
                itemProp="articleBody"></p>
          </div>

          <br />
          <p style={{ textAlign: 'center' }}>------------------------</p>
          <br />

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

          <br /><br />

          <Link className="link" style={{ color: 'black' }} to="/blog/es"><h2>Regresar al Blog</h2></Link>
          <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-month/es"><h2>Siguiente Sección</h2></Link>
          <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice/es"><h2>Sección Anterior</h2></Link>
                              
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
    allMarkdownRemark(
      filter: {frontmatter: {section: { eq: "abuelita-es" } } },
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