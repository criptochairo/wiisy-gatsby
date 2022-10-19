//MailchimpForm.jsx

import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
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
    return this.state.result === "success " ? (
        <Box textAlign='center'><div>SUCCESS</div></Box>
      ) : this.state.result === "error" ? (
        <Box textAlign='center'><div>Error!</div></Box>
      ) : (
      <form onSubmit={this._handleSubmit}>
        <Box textAlign='center'>
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
            >
            <Typography variant="button">Send/Enviar</Typography>
            </Button>
        </Box>
      </form>
    )
  }
}