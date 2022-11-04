import React from "react"
import first from '../../images/Resources/Pics/wiisy/YSDQI1.jpg'
import second from '../../images/Resources/Pics/wiisy/YSDQI2.jpg' 
import third from '../../images/Resources/Pics/wiisy/YSDQI3.jpg'
import logo from '../../images/Resources/Icons/logo-final-es.jpg'
import hector from '../../images/Resources/Pics/wiisy/hector.jpg'
import NavEs from "../../components/NavEs"
import Seo from "../../components/seo"
import GoTop from "../../components/GoTop"

const Hector = () => {
    return (
        <div className="text-container">
            <Seo title="Héctor" />
            <NavEs />
            <img src={logo} alt="wiisy-logo" className="header-img"/>
            <h1>¿Y si digo que sí?</h1>
            <p className="content-text">El 5 de noviembre del 2005 mi hermano, Héctor Cárdenas, le dedicó a una amiga una de sus pinturas. Abajo leerán el texto que leyó esa noche. Sus palabras me inspiraron, años después, a crear este sitio web en su honor:</p>
            
            <div className="hector">

            <img src={first} alt="first page" />
            <img src={second} alt="second page" />
            <img src={third} alt="third page" />
            <img src={hector} alt="hector" />

            </div>

            <GoTop />

        </div>
    )
}

export default Hector;