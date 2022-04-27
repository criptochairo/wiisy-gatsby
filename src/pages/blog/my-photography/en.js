import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "../../../components/Nav"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import { graphql } from "gatsby"

function Photography({ data, location }) {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    return (
        <Layout location={location} title={siteTitle}>
        <Seo title="My Photography" />
        <div className="aboutme-page">
            <Nav />
            <div className="blog-text-container"> 
            <StaticImage src="../../../images/Resources/Icons/camera.png" alt="logo" className="blog-img" />
            <h1>My Photography</h1> <br />

            <p className="content-text">

                In December 2020, I <b>started taking photographs</b> during my daily outdoor walks. It was my way of relieving stress after several months, mostly indoors at home during the beginnings of the pandemic. Taking photos made me <b>observe</b> more closely what nature has to offer. <br /><br />I started <b>seeing</b> things in new ways. I took my time to breathe, process, and enjoy life by looking at and being with nature.<br /><br />

                And then one day, I thought, what if I start sharing my photos with those I love? And not only that, what if I could create a playful experience for them? And so I shared my pictures with them and a special descriptive and creative caption.    
                <br /><br />
                In this photography blog, you will see what I have seen and shared since and also get a chance to read the captions I came up with. 
                <br /><br />
                I hope to inspire you to start seeing your world from a different lens… one that is more attentive, patient, loving and understanding. 
                <br /><br />
                If you do that, I can assure you will start feeling better about your own life.
                <br /><br />
                
                <br /><p style={{ textAlign: 'center' }}>------------------------</p><br /> 

                <i>January 11, 2022</i> <br /><br />


                I took more than 500 photographs on my daily walks. Over time I improved my eye and my attention to detail. I began to see with the eyes of a photographer and then when I saw something beautiful in nature, I immediately framed it in my mind, even before taking out the phone to use the camera. <br/><br/>
                
                My photos from the beginning are interesting but are missing something. <br/><br/>
                
                The last ones I like a lot and since it seems that the people with whom I shared them also liked them, we decided that one day we are going to offer them here, on this website, in a little store.<br/><br/>

                The idea is that whoever likes my photographs can buy and download them as a digital file and then use them however they want.<br/><br/>

                I will tell you here how we are progressing with this project.<br/><br/>
                
                In the meantime, here is a sample of what I photographed from December 13, 2020, to December 13, 2021:<br/><br/><br/><br/>
            

                <div className="post-img-container">
                    <i><b>January</b></i><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/jan.jpg" alt="logo" />
                    <i>“A stone in the road taught me that…”</i><br />
                    ------------------------<br /><br />
                    <i><b>February</b></i><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/feb.jpg" alt="logo" />
                    <i>“Autumnal carpet…”</i><br />
                    ------------------------<br /><br />
                    <i><b>March</b></i><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/mar.jpg" alt="logo" />
                    <i>“Nature also smiles…”</i><br />
                    ------------------------<br /><br />
                    <i><b>April</b></i><br />
                    <StaticImage src="../../../images/Resources/Pics/Photography/apr.jpg" alt="logo" />
                    <i>“Two seasons at the same time”</i><br />
                </div>

                <br/><br/>

                <Link className="link" style={{ color: 'black' }} to="/blog/en"><h2>Back to Blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast/en"><h2>Next Section</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month/en"><h2>Previous Section</h2></Link>
                <br />
                               
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
      filter: {frontmatter: {section: { eq: "Projects" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
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