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
        <Seo title="My Sister's Advice" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/twins.png" alt="logo" className="blog-img" />
            <h1>My Sister's Advice</h1> <br />

            <React.Fragment>
            <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p class="content-text">

                The most important woman in my life, after my mother, is my sister Rocío.
                <br /><br />
                She is older and has opened many paths to make life less complicated for me when I go throught it.
                <br /><br />
                She takes care of me from a distance, loves me unconditionally, and has taught me to live life more lightly.
                <br /><br />
                When I have had difficult moments, it is she who I consult (besides my dearest husband, of course).
                <br /><br />
                And just as there is the famous <b><i>Dear Abby</i></b> column (<a href="https://en.wikipedia.org/wiki/Dear_Abby" target="_blank" rel="noreferrer" >Dear Abby - Wikipedia</a>), I wanted to create a similar section where my sister gives advice and guides readers, just as she has advised and guided me.
                <br /><br />
                This space is intended to be fun while we learn and consider a new perspective.
                <br /><br />
                Rocío and I hope you enjoy it.
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

                <i>Previous Posts</i><br /><br />

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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/abuelita-recommends/en"><h2>Next Section</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/projects-with-my-daughter/en"><h2>Previous Section</h2></Link></button>

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
      filter: {frontmatter: {section: { eq: "sister" } } },
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