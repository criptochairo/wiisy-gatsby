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
        <Seo title="Consejos de mi hermana" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/twins.png" alt="logo" className="blog-img" />
            <h1>Consejos de mi hermana</h1> <br />

            <React.Fragment>
              {/* eslint-disable-next-line */}
              <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
                {showText &&
                  
                  <p className="content-text">

                    La mujer más importante en mi vida, después de mi mamá, es mi hermana Rocío.
                    <br /><br />
                    Es más grande que yo y por tanto le ha tocado abrir brecha para que cuando me toque pasar por ahí, la vida me sea menos difícil.
                    <br /><br />
                    Ella me cuida a la distancia, me quiere incondicionalmente y me ha enseñado a vivir la vida de manera más liviana.
                    <br /><br />
                    Cuando he tenido momentos difíciles es a ella a quien consulto.
                    <br /><br />
                    Y así como en inglés existe la sección tan famosa de <b><i>Dear Abby</i></b> column (<a href="https://es.wikipedia.org/wiki/Dear_Abby" target="_blank" rel="noreferrer" >Dear Abby - Wikipedia</a>), en este sitio quiero crear una sección parecida, pero con mi hermana siendo la que da consejos y orienta a las y los lectores, así como me ha aconsejado y orientado a mí.
                    <br /><br />
                    Este espacio pretende ser un lugar divertido para escuchar, aprender y considerar una perspectiva nueva.
                    <br /><br />
                    Rocío y yo esperamos que lo disfruten.
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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/abuelita-recommends/es"><h2>Siguiente sección</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/projects-with-my-daughter/es"><h2>Sección anterior</h2></Link></button>

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
      filter: {frontmatter: {section: { eq: "sister-es" } } },
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