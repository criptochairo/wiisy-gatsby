import React from "react"
import first from '../../images/Resources/Pics/wiisy/hector_page-0001.jpg'
import second from '../../images/Resources/Pics/wiisy/hector_page-0002.jpg' 
import third from '../../images/Resources/Pics/wiisy/hector_page-0003.jpg'
import fourth from '../../images/Resources/Pics/wiisy/hector_page-0004.jpg'
import logo from '../../images/Resources/Icons/logo-final.jpeg'
import hector from '../../images/Resources/Pics/wiisy/hector.jpg'
import Nav from "../../components/Nav"
import Seo from "../../components/seo"
import GoTop from "../../components/GoTop"

const Hector = () => {
    return (
        <div className="text-container">
            <Seo title="Hector" />
            <Nav />
            <img src={logo} alt="wiisy-logo" className="header-img"/>
            <h1>What If I Say Yes?</h1>
            <p className="content-text">On November 5, 2005, my brother Héctor Cárdenas dedicated a painting to one of his friends. Below you will see the text he read that night. His words inspired me, years later, to create this website in his honor:</p>
            
            <div className="hector">

            <img src={first} alt="first page" />
            <img src={second} alt="second page" />
            <img src={third} alt="third page" />
            <img src={fourth} alt="fourth page" />
            <img src={hector} alt="hector" />

            </div>

            <GoTop />

        </div>
    )
}

export default Hector;