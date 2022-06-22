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
        <Seo title="Libro con mi hermano" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/book.png" alt="logo" className="blog-img" />
            <h1>Libro con mi hermano gemelo</h1> <br />

              <React.Fragment>
                {/* eslint-disable-next-line */}
                <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
                {showText &&
                  
                  <p className="content-text">

                  Mi hermano gemelo y yo cumplimos 50 años este verano (2021) y para celebrar en grande se me ocurrió que podríamos crear un libro juntos y publicarlo a través de Amazon. Sin editoriales de por medio y sin depender de que alguien nos dijera si le gustaba nuestro proyecto o no.
                  <br /><br />
                  Consulté con mi hermano y me dijo que <i><b>!sí!</b></i>
                  <br /><br />
                  Hace muchos años Jorge encontró en la pintura una manera de volverse a enamorar de la vida y de su ser, después de haber pasado por momentos muy dolorosos. Y desde entonces ha creado obras de arte que enamoran a quien las ve.
                  <br /><br />
                  Y por si fuera poco, hace unos años creó su propio sitio web para promover a artistas mexicanos (tienen que visitar <a href="https://www.pintoresmexicanos.com/" target="_blank" rel="noreferrer" >www.pintoresmexicanos.com</a> para que vean de qué les estoy hablando... ¡es una belleza!)
                  <br /><br />
                  Bueno, el caso es que nuestra idea es escoger sus mejores 50 obras de arte (pintura, dibujo y escultura) y combinarlas con mis mejores 50 fotografías.
                  <br /><br />
                  Jorge va a diseñar el libro y yo voy a escribir el texto y juntos publicaremos en el 2022 una obra que espero les guste tanto como a nosotros.
                  <br /><br />
                  La idea es inspirarlos a hacer lo mismo: autopublicar es una manera de sacar a la luz nuestros más sinceros y profundos pensamientos y compartirlos con el mundo sin tener que enfrentar barreras innecesarias de las casas editoriales
                  <br /><br />
                  En resumen, aquí les contaré sobre nuestro proceso creativo y los actualizaré sobre nuestro progreso.
                  <br /><br /><br /><br />
                  
                  <p style={{ textAlign: 'center' }}>------------------------</p>

                  </p>}
                
              </React.Fragment>

                <p className="content-text">
                
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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/projects-with-my-daughter/es"><h2>Siguiente sección</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-podcast/es"><h2>Sección anterior</h2></Link></button>

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
      filter: {frontmatter: {section: { eq: "my-book-es" } } },
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