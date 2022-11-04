import * as React from "react";
import { navigate } from "gatsby-link";
import Seo from '../../components/seo';
import Nav from "../../components/NavEs";
import { StaticImage } from "gatsby-plugin-image";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (<>
        <Seo title="Pizarrón comunitario" />
        <Nav />
          <div className="text-container">
            <StaticImage src="../../images/Resources/Pics/544.JPEG" alt="logo" className="header-img" />
              <h1>Pizarrón comunitario</h1>
              <p className="content-text">
                En cuestiones de creación es muy importante tener un espacio personal, íntimo. Pero también es importante crear un espacio comunal, para compartir lo que pensamos, reflexionamos y sentimos y así darle un sentido más completo a nuestra existencia.
                <br /><br />
                Después de hacer mis propias reflexiones, a mí me gusta mucho preguntarle a la gente que conozco qué opinan sobre tal o cual tema. Siento que siempre aprendo algo de alguien. Me abre a nuevas maneras de ver el mundo.
                <br /><br />
                Este espacio es para que compartan sus anécdotas relacionadas con sus propios procesos de "¿y si digo que sí". Aquí pueden plantear sus dudas, contarnos de sus miedos y resistencias, pero también compartir las veces en las que ese ¡sí! les ha cambiado la vida, aunque sea de maneras muy modestas. 
                <br /><br />
                Dejo entonces este pizarrón para que escriban y compartan...
              </p>
              <form
                name="contact"
                method="post"
                action="/community/thanks-es/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Nombre
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    E-mail
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Mensaje
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button id="button-55" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
          </div>
        </>
    );
  }
}
