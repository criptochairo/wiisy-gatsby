import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <br />
      <h1>Oops! 404: Not Found</h1>
      <p>This page doesn't exist, sorry.</p>
      <p>But here's a picture of Jamila, a cute 2-year-old rescue dog, who is asking for your forgiveness.  Keep in mind that Jamila will go hungry if the developer of this website gets fired.</p>
      <StaticImage src="../images/Resources/Pics/404/jamila.jpg" alt="plsnofire" id="jamila"/>
      <Link to="/" itemProp="url"><br /><br />Back to Home Page</Link>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
