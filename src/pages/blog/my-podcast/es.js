import React, {useState} from 'react'
import { Link } from "gatsby"
import Nav from '../../../components/Nav'
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../../../components/layout"
import Seo from '../../../components/seo'


function Podcast({ data, location }) {
    
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
        <Seo title="Mi pódcast" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container">
            <StaticImage src="../../../images/Resources/Icons/microphone.png" alt="wiisy-logo" className="blog-img" />
            <h1>Mi pódcast</h1><br />

            <React.Fragment>
              {/* eslint-disable-next-line */}
              <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p className="content-text">

                Un día, reflexionando en voz alta con mi esposo y mi hija sobre el sentido de mi vida, y contestando a sus preguntas, llegué a la conclusión de que quería intentar algo nuevo que me daba mucho nervio pero que a la vez me emocionaba enormemente: crear mi propio pódcast. 
                <br /><br />
                Gracias a la pandemia había empezado a escuchar muchos pódcasts y me había enamorado de esta forma tan íntima de comunicación.
                <br /><br />
                Ahora la pregunta era... ¿y de qué hago mi pódcast?, ¿qué tengo que ofrecerle al mundo?
                <br /><br />
                Pues resulta que desde hace muchos años yo regalo palabras, a mi familia, a mis amigas y amigos queridos, a gente a la que quiero y admiro. Pero esos escritos no los he publicado, no los he compartido con nadie más que con las personas a las que van dedicados.
                <br /><br />
                Entonces pensé "¿y si lo hago sobre regalos y palabras?"
                <br /><br />
                Así nació el título, la idea y mi pódcast: <i>De regalos y palabras</i>.
                <br /><br />
                El logo me lo diseñó mi hermano gemelo, Jorge. Mi hermano mayor, Luis, es el director de sonido. Mi cuñada, Ana Laura, me ayudó a entrenar mi voz. Y mi hija, Maya, grabó la presentación del pódcast.
                <br /><br />
                Mi lengua materna es el español y por eso lo grabo en español. Todavía no me aviento a decir ¿y si digo que sí a grabarlo en inglés? porque eso me da todavía mucho miedo (mi pronunciación no es perfecta y no vaya a ser que acabe diciendo algo que suene a otra cosa, ja, ja). Pero en el espíritu de este sitio web, algún día estaré anunciando que dije que <b><i>!sí!</i></b> y presentaré mi pódcast en inglés.
                <br /><br />
                Mientras tanto, aquí les contaré de lo que hablo en mis distintos episodios, con toda la intención de inspirarlos a hacer lo mismo: aprender a regalar sus propias palabras… y ¿quién sabe? A lo mejor también a crear un día su propio pódcast.
                <br /><br /><br /><br />
                
                <p style={{ textAlign: 'center' }}>------------------------</p>

                </p>}
              
            </React.Fragment>

                <p class="content-text">
                
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
                
                <i>Posts anteriores</i><br />
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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-book/es"><h2>Siguiente sección</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-photography/es"><h2>Sección anterior</h2></Link></button>

        </div> 
    </div>
    
    </Layout>
    )
}

export default Podcast;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {section: { eq: "my-podcast-es" } } },
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