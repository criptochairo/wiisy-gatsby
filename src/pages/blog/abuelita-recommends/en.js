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
      buttonText = "Click here to learn more about this section"
    } else {
      buttonText = "Hide text"
    }

    return (
        <Layout location={location} title={siteTitle}>
        <Seo title="Abuelita Recommends" />
        <div className="aboutme-page">
          <Nav />
          <div className="blog-text-container"> 
          <StaticImage src="../../../images/Resources/Icons/grandma.png" alt="logo" className="blog-img" />
          <h1><i>Abuelita</i> Recommends</h1> <br />

          <React.Fragment>
          <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p class="content-text">

                My mom (her grandkids call her <i>Abuelita</i>) dedicated much of her life to raising three sons and two daughters and then helping raise her three granddaughters and three grandsons. The time she had left for herself was minimal, yet she always found a way to keep her curiosity for learning.
                <br /><br />
                Now that we no longer live at her home and she enjoys her time more freely, she has a vast collection of recommendations on books, movies, documentaries, places to visit, restaurants, etc.
                <br /><br />
                I want to share her recommendations with you in this section that draws on all the institutional memory she has built in her more than 70 trips around the sun.
                <br /><br />
                Hopefully, this space will encourage you to turn to the people you have spent a lifetime with and engage in conversations about what they have learned during their lives.
                <br /><br />
                    
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
          <button id='button-55' aria-label="back-to-blog"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/en"><h2>Back to Blog</h2></Link></button>
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/moment-of-last-month/en"><h2>Next Section</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-sisters-advice/en"><h2>Previous Section</h2></Link></button>
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
      filter: {frontmatter: {section: { eq: "abuelita" } } },
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