//MailchimpForm.jsx

import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import React from "react"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {
    return (
      <form onSubmit={this._handleSubmit} className="newsletter-container">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          variant="outlined"
          onChange={this.handleChange}
        />
        <br />
            <Button
            variant="contained"
            color="primary"
            label="Submit"
            type="submit"
            style={{margin: "1em auto"}}
            onClick={() => {alert('Thank you for subscribing!')}}
            >
            <Typography variant="button">Send/Enviar</Typography>
            </Button>
        </Grid>
      </form>
    )
  }
}