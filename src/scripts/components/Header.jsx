import { useLocation } from "react-router-dom"

function Header() {
  const location = useLocation()
  const path = location.pathname

  let firstButtonText = "Contact / Help"
  let firstButtonHref = "/contact-help"

  if (path === "/contact-help") {
    firstButtonText = "Home"
    firstButtonHref = "/"
  } else if (path === "/login") {
    firstButtonText = "Home"
    firstButtonHref = "/"
  }

  return (
    <header className="bg-primary text-white">
      <nav className="container-fluid px-3 px-md-5 navbar navbar-expand-md navbar-dark">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img className="me-3" src="/ticket-white.svg" height="35" alt="STA Ticket Logo" />
          <h1 className="fs-3 m-0">STA Ticket System</h1>
        </a>

        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mt-3 mt-md-0 d-flex flex-column flex-md-row justify-content-center justify-content-md-end align-items-center w-100">
            <li className="nav-item mb-2 mb-md-0 me-md-3">
              <a className="btn btn-primary text-white w-100 w-md-auto" href={firstButtonHref}>
                {firstButtonText}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="btn btn-outline-primary w-100 w-md-auto"
                href={path === "/login" ? "/contact-help" : "/login"}
              >
                {path === "/login" ? "Contact / Help" : "Login"}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
