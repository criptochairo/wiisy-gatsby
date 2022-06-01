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
        <Seo title="Momenth of the Month" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/month.png" alt="logo" className="blog-img" />
            <h1>Moment of the Month</h1> <br />


            <p class="content-text"> 
            {/* My daughter Maya and my husband Carlos will oversee this section. 
            <br /><br />
            They wanted to participate in my website, and I said <b><i>yes!</i></b> <span role="img" aria-label="smile">😄</span>
            <br /><br />
            Here they will talk about a moment of the month that was critical, fun, interesting, curious, etc., for them.
            <br /><br />
            It is a space to encourage you to reflect on how you lived the past month by choosing a moment you want to remember forever.
            <br /><br />
            Maya and Carlos hope that you will like what they share with you. 
            <br /><br /> */}
                
            <p style={{ textAlign: 'center' }}>------------------------</p>
          
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

              <br /><br />

              <Link className="link" style={{ color: 'black' }} to="/blog/en"><h2>Back to Blog</h2></Link>
              <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month/en"><h2>Next Section</h2></Link>
              <Link className="link" style={{ color: 'black' }} to="/blog/abuelita-recommends/en"><h2>Previous Section</h2></Link>
                            
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
      filter: {frontmatter: {section: { eq: "motm" } } },
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