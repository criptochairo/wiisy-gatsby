import React from "react";
import Nav from "../../components/Nav";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";

function Board() {
    return (
        <div className="text-container">
            <Nav />
            <Seo title="Community Board" />
            <StaticImage src="../../images/Resources/Pics/544.JPEG" alt="logo" className="header-img" />
            <h1>Community Board</h1><br />

            <p className="content-text">
            In matters of creation, it is essential to have a personal, intimate space. But it is also vital to create a communal space, share what we think, reflect, and feel and thus give whole meaning to our existence.<br /><br />

            After reflecting on my own, I like to ask people what they think about this topic. I feel like I always learn something from someone. It opens me up to new ways of seeing the world.<br /><br />

            This space is for you to share your anecdotes related to your own <b><i>"what if I say yes"</i></b> processes. Here you can write about your doubts, tell us about your fears and resistances, but also share the times when that <b><i>yes!</i></b> has changed your live, even if it has been in very modest ways.<br /><br />

            So, I leave this community board for you to write and share ... <strong>(coming soon).</strong> 
            </p>
        </div>
    )
}

export default Board;