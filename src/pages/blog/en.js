import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Social from '../../images/Resources/Icons/camera.png'
import Microphone from '../../images/Resources/Icons/microphone.png'
import Book from '../../images/Resources/Icons/book.png'
import Mom from '../../images/Resources/Icons/motherhood.png'
import Sister from '../../images/Resources/Icons/twins.png'
import Grandma from '../../images/Resources/Icons/grandma.png'
import Week from '../../images/Resources/Icons/month.png'
import Prize from '../../images/Resources/Icons/wreath.png'
import GoTop from "../../components/GoTop"
import Nav from "../../components/Nav"
import Seo from "../../components/seo"


function Blog() {
    return (
        
        <div className="text-container"> 
        <Seo title="Blog" />
        <Nav />
        <StaticImage src="../../images/Resources/Pics/503.jpg" alt="wiisy-logo" className="header-img" />
            <h1>Blog</h1>
            
            <p className="content-text">After going through the <b><i>What if I Say Yes</i></b> process, I write about my most recent projects.<br /><br />
            This is my space to inspire you to create your own space after saying <u><b><i>yes</i></b></u> to your creative soul.<br /><br /><br /></p>
            <ul className="blog-list">
                <div className="blog-container">
                    <Link to="/blog/my-photography/en"><img src={Social} alt="my-photography" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-photography/en"><h2>My Photography</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-podcast/en"><img src={Microphone} alt="my-podcast" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-podcast/en"><h2>My Podcast</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-book/en"><img src={Book} alt="my-book" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-book/en"><h2>Book with My Twin Brother</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/projects-with-my-daughter/en"><img src={Mom} alt="my-projects" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/projects-with-my-daughter/en"><h2>Projects with My Daughter</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-sisters-advice/en"><img src={Sister} alt="my-sister" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-sisters-advice/en"><h2>My Sister's Advice</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/abuelita-recommends/en"><img src={Grandma} alt="my-mom" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/abuelita-recommends/en"><h2><i>Abuelita</i> Recommends</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/moment-of-last-month/en"><img src={Week} alt="motm" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/moment-of-last-month/en"><h2>Moment of Last Month</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/person-of-the-month/en"><img src={Prize} alt="person-of-the-month" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/person-of-the-month/en"><h2>The <i>What If I Say Yes</i> Person of the Month</h2></Link>
                </div>
                
            </ul>

            <GoTop />
            
        </div>
    )
}

export default Blog;