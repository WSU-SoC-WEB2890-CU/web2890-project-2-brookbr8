function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-4 d-flex flex-column align-items-left">
            <h5>STA Ticket System</h5>
            <p>
              Proudly supporting Weber State faculty and staff with fast,
              dependable IT support.
            </p>
          </div>

          <div className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="footer-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link" href="contact-help">
                  Contact / Help
                </a>
              </li>
              <li>
                <a className="footer-link" href="login">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center text-center">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.facebook.com/WeberState"
                className="text-white fs-4"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://x.com/WeberStateU"
                className="text-white fs-4"
                target="_blank"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/WeberStateU"
                className="text-white fs-4"
                target="_blank"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/weberstate/"
                className="text-white fs-4"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />
        <p className="text-center mb-0">
          &copy; 2025 Weber State STAs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
