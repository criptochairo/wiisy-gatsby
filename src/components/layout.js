import * as React from "react"
import Nav from "./Nav"
import NavEs from "./NavEs"
import GoTop from "./GoTop"
import MailChimpForm from "./MailChimpForm"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let footerText
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        {title}
      </h1>
    )
  } else if (location.pathname === "/es") {
    header = (
      <h1 className="main-heading">
        ¿Y si digo que sí?
      </h1>
    )
  }
  let nav
  if(location.pathname.includes("/es")) {
    nav = <NavEs />
    footerText = (
      <p style={{textAlign: "center"}}>
        ¡Suscríbanse a mi newsletter para recibir fotografías gratis y actualizaciones personales!
      </p>
    )
  } else {
    nav = <Nav />
    footerText = (
      <p style={{textAlign: "center"}}>
        Subscribe to my newsletter to receive free wallpapers and personal updates!
      </p>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>
        {children}
        {nav}
        <GoTop />
      </main>
      <footer>
        {footerText}
        <MailChimpForm />
        <br />
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a><br />
        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br />
        Website by <a href="https://github.com/criptochairo" title="GithubProfile">Criptochairo</a>
      </footer>
    </div>
  )
}

export default Layout
