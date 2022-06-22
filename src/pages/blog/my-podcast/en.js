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
      buttonText = "Click here to learn more about this section"
    } else {
      buttonText = "Hide text"
    }

    return (
        <Layout location={location} title={siteTitle}>
        <Seo title="My Podcast" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container">
            <StaticImage src="../../../images/Resources/Icons/microphone.png" alt="wiisy-logo" className="blog-img" />
            <h1>My Podcast</h1><br />

            <React.Fragment>
            <button id='button-55' aria-label='show-text' onClick={() => setShowText(!showText)}><strong>{buttonText}</strong></button><br />
              {showText &&
                
                <p class="content-text">

                One day, reflecting with my husband and daughter about the meaning of my life and answering their questions, I concluded that I wanted to try something new that made me very nervous but at the same time excited; that is, to create my podcast. 
                <br /><br />
                Thanks to the pandemic, I had started listening to many podcasts and had fallen in love with this personal form of communication.
                <br /><br />
                Now the question was... And what do I make my podcast about? What do I have to offer to the world?
                <br /><br />
                It turns out that, for many years, I have been gifting words to my family, dear friends, and others I love and admire. Yet I have not published these writings; I have not shared them with anyone other than the people to whom they are dedicated.
                <br /><br />
                So, I thought, "what if I do it about gifts and words?"
                <br /><br />
                Thus, my podcast's title was born: <i>De regalos y palabras</i> (Of Gifts and Words).
                <br /><br />
                The logo was designed for me by my twin brother Jorge. My oldest brother Luis is the sound director. My sister-in-law Ana Laura helped me train my voice. And my daughter Maya recorded the podcast presentation.
                <br /><br />
                My mother tongue is Spanish, so I record it in Spanish. I still haven't gotten myself into saying <i>what if I say yes to recording it in English?</i> That still scares me because my pronunciation isn't perfect, and I'm afraid I will end up saying something that sounds like something else, ha-ha. But in the spirit of this website, I will say <b><i>yes!</i></b> to presenting my podcast in English one day.
                <br /><br />
                In the meantime, I will write here about what I talk about in my various episodes to inspire you to do the same: learn to give away your own words, and who knows, maybe also create your podcast someday!
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
                
                <i>Previous Posts</i><br />
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
          <button id='button-55' aria-label="next-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-book/en"><h2>Next Section</h2></Link></button>
          <button id='button-55' aria-label="previous-section"><Link className="link" style={{ color: 'black', width: '15rem' }} to="/blog/my-photography/en"><h2>Previous Section</h2></Link></button>

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
      filter: {frontmatter: {section: { eq: "my-podcast" } } },
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