import React from "react";
import Nav from "../../components/NavEs";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";

function Board() {
    return (
        <div className="text-container">
            <Nav />
            <Seo title="Pizarrón Comunitario" />
            <StaticImage src="../../images/Resources/Pics/544.JPEG" alt="logo" className="header-img" />
            <h1>Pizarrón Comunitario</h1><br />

            <p className="content-text">
            En cuestiones de creación es muy importante tener un espacio personal, íntimo. Pero también es importante crear un espacio comunal, para compartir lo que pensamos, reflexionamos y sentimos y así darle un sentido más completo a nuestra existencia.
            <br /><br />

            Después de hacer mis propias reflexiones, a mí me gusta mucho preguntarle a la gente que conozco qué opinan sobre tal o cual tema. Siento que siempre aprendo algo de alguien. Me abre a nuevas maneras de ver el mundo.
            <br /><br />

            Este espacio es para que compartan sus anécdotas relacionadas con sus propios procesos de <b><i>"¿y si digo que sí"</i></b>. Aquí pueden plantear sus dudas, contarnos de sus miedos y resistencias, pero también compartir las veces en las que ese <b><i>!sí!</i></b> les ha cambiado la vida, aunque sea de maneras muy modestas. Dejo entonces este pizarrón para que escriban y compartan... <strong>(coming soon).</strong>
            <br /><br />
            
            </p>
        </div>
    )
}

export default Board;