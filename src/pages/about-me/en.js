import React from "react"
import Nav from "../../components/Nav"
import Seo from "../../components/seo"
import GoTop from "../../components/GoTop"
import { StaticImage } from "gatsby-plugin-image"

const Hector = () => {
    return (
        <div className="text-container">
            <Seo title="About Me" />
            <Nav />
            <StaticImage src="../../images/Resources/Pics/210.JPEG" alt="wiisy-logo" className="header-img" />
            <h1>About Me</h1>
            <p className="content-text">

                My name is Lucía Cárdenas.<br /><br />

                I am a daughter, sister, wife, mom, aunt, niece, goddaughter, friend, <i>comadre</i>, partner, guide, supporter, coach, virtual cheerleader, Zoom session organizer, archivist at heart, writer, podcaster and much more.<br /><br />

                I have a bachelor's degree in Education (pedagogy) from <i>The National Autonomous University of Mexico</i> (UNAM), a master's degree in Anthropology from <i>The New School for Social Research</i>, and a Certificate in Translation (English into Spanish) from the <i>University of Texas, Brownsville</i> (now the <i>University of Texas, Rio Grande Valley</i>).<br /><br />

                But most importantly, I am the intellectual creator of this website, honoring the philosophy that defined my dear brother Héctor Cárdenas' life. A philosophy that speaks of possibilities, growth, love of life, and the use of the word <b><u>yes</u></b> in constructive and creative ways.<br /><br />

                <b>I welcome you to this website, a sanctuary of possibilities guided by <i>yes!</i></b><br /><br />

                Let me tell you why I created this space ...<br /><br />

                Héctor was the one who taught me to take risks and to throw myself into doing things that scared me but that at the same time I wanted to do. <br /><br />

                Thanks to him, I decided to leave Mexico and pursue a graduate degree in the U.S. My life trajectory took a radical turn that has taken me to where I am today.<br /><br />

                Whenever I shared my new ideas with him, he always encouraged me to do whatever I could to make my dreams come true.<br /><br />

                When he died unexpectedly in the summer of 2016, his absence left us all, especially me, with a bottomless hole in our souls.<br /><br />

                But over the years, in addition to missing him greatly, I have learned to incorporate things I learned from him into my life every day. That is my way of not letting him go, of not forgetting him, of making his absence hurt less.<br /><br />

                So, one day, five years since his passing, I woke up with an idea: What if I bought the domain with the phrase <b><i>What If I Say Yes?</i></b> that he used in English for a text he had written dedicating to a friend one of his paintings to her. <br /><br />

                I immediately got down to work. I checked Google and saw that the domain I wanted was available, so I bought it. Then I started to think about what I wanted to achieve with this new online space.<br /><br />

                Since my nephew Luis is studying to become a <i>full-stack web developer</i> I hired him to help me build the website.<br /><br />

                Then I asked my twin brother Jorge and daughter Maya to collaborate on the design of the logo.<br /><br />

                Years before Héctor died, I had put on my vision board to publish a book with my sister and three brothers. But that plan had to change with Héctor's passing.<br /><br />

                So I decided my new plan had to include my siblings and my closest family members, and this online platform was the space to do it.<br /><br />

                The original book project that I had imagined years ago has grown in significance and meaning because of the inclusion of my extended family.<br /><br />

                This is one space where I can dialogue with my family, and we can all process, indirectly, our grief over Héctor's passing and absence. Also, a space where we can all continue to honor his life that included him leaving a bit of himself in the soul of each one of the human beings with whom he came across in his almost 49 years of walking on this Earth.
                <br /><br /><br />

                This space is in your honor, dearest brother!<br /><strong>WE LOVE YOU!</strong>
                <br /><strong>¡TE QUEREMOS MUCHO!</strong><br /><br />

            </p>

            <StaticImage src="../../images/Resources/Pics/lucy1.JPG" alt="wiisy-logo" className="header-img" />

            <GoTop />

        </div>
    )
}

export default Hector;