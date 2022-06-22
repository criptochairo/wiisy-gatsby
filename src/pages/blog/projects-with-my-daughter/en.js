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
        <Seo title="Projects With My Daughter" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/motherhood.png" alt="logo" className="blog-img" />
            <h1>Projects with My Daughter</h1> <br />

            <React.Fragment>
            <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p class="content-text">

                One of the silver linings of the pandemic was that I found new ways to get close to my daughter Maya. For several months, being together all day was a challenge ... until one day, we discovered that we could create things together.
                <br /><br />
                In the summer of 2021, several of her cousins graduated from junior high and senior high school. To celebrate them from a distance, we made a video with a significant character in Maya's life named Cookies.
                <br /><br />
                My brother Héctor gave her a teddy bear the day she was born. He came to the hospital and brought a pink plastic bracelet that said, "It's a girl!" and a beautiful teddy bear that Maya later baptized as <b>Cookies</b> (yes, like that, in plural).
                <br /><br />
                Cookies' video was so successful that we decided to continue making and sharing more of them to celebrate someone's birthday or to entertain younger friends.
                <br /><br />
                We will share some of the videos we created together (Maya, Cookies and I) in this section.
                <br /><br />
                I hope it inspires you to collaborate with someone else and create visual projects to share them with the world too!
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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-sisters-advice/en"><h2>Next Section</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-book/en"><h2>Previous Section</h2></Link></button>

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
      filter: {frontmatter: {section: { eq: "projects" } } },
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