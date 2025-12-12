import Header from "../scripts/components/Header";
import Footer from "../scripts/components/Footer";

function Home() {
  return (
    <div className="">
      <Header />
      <section className="hero text-center py-5">
        <div className="container">
          <div className="hero-text p-4 rounded text-white">
            <h1 className="display-4">Streamline Your IT Support</h1>
            <p className="lead">
              <strong className="">
                Weber State Staff can submit tickets, track progress, and
                communicate with our IT team easily.
              </strong>
            </p>
            <a
              className="btn btn-primary btn-lg mt-3 btn-get-started"
              href="login"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <main className="container py-5">
        <section className="row text-center mt-4">
          <div className="col-12 col-md-4 mb-4">
            <a
              href="login"
              className="feature-card text-decoration-none d-block h-100"
            >
              <i className="fa-solid fa-ticket fa-3x mb-3 text-primary"></i>
              <h3>Submit Tickets</h3>
              <p>
                Easily create a support ticket with details about your issue.
              </p>
            </a>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <a
              href="login"
              className="feature-card text-decoration-none d-block h-100"
            >
              <i className="fa-solid fa-gear fa-3x mb-3 text-primary"></i>
              <h3>Manage Requests</h3>
              <p>
                IT staff can track, update, and resolve tickets efficiently.
              </p>
            </a>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <a
              href="login"
              className="feature-card text-decoration-none d-block h-100"
            >
              <i className="fa-solid fa-comments fa-3x mb-3 text-primary"></i>
              <h3>Communicate</h3>
              <p>
                Keep in touch with IT staff through ticket updates and messages.
              </p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
