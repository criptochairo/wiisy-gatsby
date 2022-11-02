import * as React from "react";
import { navigate } from "gatsby-link";
import Seo from '../../components/seo';
import Nav from "../../components/Nav";
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
        <Seo title="Community Board" />
        <Nav />
          <div className="text-container">
            <StaticImage src="../../images/Resources/Pics/544.JPEG" alt="logo" className="header-img" />
              <h1>Community Board</h1>
              <p className="content-text">
                In matters of creation, it is essential to have a personal, intimate space. But it is also vital to create a communal space, share what we think, reflect, and feel and thus give whole meaning to our existence.
                <br /><br />
                After reflecting on my own, I like to ask people what they think about this topic. I feel like I always learn something from someone. It opens me up to new ways of seeing the world.
                <br /><br />
                This space is for you to share your anecdotes related to your own "what if I say yes" processes. Here you can write about your doubts, tell us about your fears and resistances, but also share the times when that yes! has changed your live, even if it has been in very modest ways.
                <br /><br />
                So, I leave this community board for you to write and share ...
              </p>
              <form
                name="contact"
                method="post"
                action="/community/thanks/"
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
                    Name
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
                    Email
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
                    Message
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
                    Send
                  </button>
                </div>
              </form>
          </div>
        </>
    );
  }
}
