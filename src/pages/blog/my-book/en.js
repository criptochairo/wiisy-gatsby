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
        <Seo title="Book With My Twin Brother" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/book.png" alt="logo" className="blog-img" />
            <h1>Book with My Twin Brother</h1> <br />

            <React.Fragment>
            <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p class="content-text">

                My twin brother Jorge and I turned 50 this past summer (2021), and to celebrate in a big way, I thought we could create a book together and publish it through Amazon without a publisher involved and without depending on others telling us if they liked our project or not.
                <br /><br />
                I consulted with my brother, and he said <i><b>yes!</b></i>
                <br /><br />
                Many years ago, Jorge found in painting a way to fall in love with life and his <i>being</i> again after having gone through harrowing moments. And since then, he has created works of art that have made those who see them fall in love with life too.
                <br /><br />
                And if that wasn't enough, a few years ago, he created his website to promote Mexican artists (you must visit <a href="https://www.pintoresmexicanos.com/" target="_blank" rel="noreferrer" >www.pintoresmexicanos.com</a> to see what I'm talking about ... It's beautiful!)
                <br /><br />
                Well, our idea for the book is to choose his best 50 works of art (paintings, drawings and sculptures) and combine them with my best 50 photographs.
                <br /><br />
                Jorge will design the book, and I will write the text, and together we will publish in 2022. We hope you will like the book as much as we already do.
                <br /><br />
                The idea is to inspire you to do the same: self-publishing is a way to bring out our most sincere and most profound thoughts and share them with the world without any unnecessary publishing barriers.
                <br /><br />
                In sum, in this section, I will tell you about our creative process and update you on our progress.
                <br /><br />
                
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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/projects-with-my-daughter/en"><h2>Next Section</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-podcast/en"><h2>Previous Section</h2></Link></button>

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
      filter: {frontmatter: {section: { eq: "my-book" } } },
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