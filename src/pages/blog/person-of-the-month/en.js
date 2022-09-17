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
        <Seo title="WIISY Person of the Month" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/wreath.png" alt="logo" className="blog-img" />
            <h1>The <i>What If I Say Yes</i> Person of the Month</h1> <br /><br />

            <React.Fragment>
            <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p class="content-text">

                In this section, I want to share the stories of the people I have met who perfectly exemplify the <b>"What If I Say Yes!"</b> philosophy.
                <br /><br />
                You will meet people who have dared to say <i><b>yes!</b></i> at different times in their lives and have started exciting projects along the way.
                <br /><br />
                They are the people who inspire me to keep going and the ones who remind me that life is worth living.
                <br /><br />
                I hope this space inspires you to express yourself the best you can, depending on your different areas of interest.
                <br /><br />
                Good luck!<br /><br />
                    
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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-photography/en"><h2>Next Section</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/moment-of-last-month/en"><h2>Previous Section</h2></Link></button>
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
      filter: {frontmatter: {section: { eq: "potm" } } },
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