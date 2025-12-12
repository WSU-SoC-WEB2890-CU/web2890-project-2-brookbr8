import Header from "../scripts/components/Header";
import FAQs from "../scripts/components/FAQs";
import Footer from "../scripts/components/Footer";

const faqData = [
  {
    question: "What can the STAs help with?",
    answer:
      "Student Technology Assistants (STAs) provide frontline desktop support across Weber State University, helping faculty, staff, and student labs troubleshoot technical issues and keep systems running smoothly.",
  },
  {
    question: "How do I submit a new support ticket?",
    answer:
      'Navigate to your user dashboard and click "Create New Ticket". Fill out the form with the issue details, select a category, and submit. The IT team will respond via your dashboard or contact info.',
  },
  {
    question: "Who can I contact for urgent IT issues?",
    answer:
      "For urgent issues please email, call, or visit the STAs directly during working hours or reach out to the manager Tim Chapman.",
  },
  {
    question: "Why can't I login?",
    answer:
      "Only Weber State University faculty and staff are able to login and submit tickets to the STAs. Make sure you are using your Weber State email when logging in, if you are still having trouble logging in you should contact Tim Chapman or central IT on campus.",
  },
];

function ContactHelp() {
  return (
    <div className="contact-help">
      <Header />

      <section className="faq-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center mb-5 text-secondary">
            Find answers to common IT issues and support questions.
          </p>
        </div>
        <FAQs faqs={faqData} />
      </section>

      <section id="contact-info" className="py-2 mb-5">
        <div className="container">
          <h2 className="mb-5 text-center">Contact Information</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm contact-card">
                <div className="card-body">
                  <h5 className="card-title">General IT Support</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <i className="bi bi-clock fs-4 me-2"></i>
                      <strong>Hours:</strong> Monday – Friday, 8:00 AM – 5:00 PM
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-telephone fs-4 me-2"></i>
                      <strong>Phone:</strong> (801) 626-8628
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-envelope fs-4 me-2"></i>
                      <strong>Email: </strong>
                      <a
                        href="mailto:sta@weber.edu"
                        className="text-decoration-none text-dark"
                      >
                        sta@weber.edu
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-building fs-4 me-2"></i>
                      <strong>Room:</strong> Lampros Hall, 205
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm contact-card">
                <div className="card-body">
                  <h5 className="card-title">Manager</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <i className="bi bi-person fs-4 me-2"></i>
                      <strong>Name:</strong> Tim Chapman
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-telephone fs-4 me-2"></i>
                      <strong>Phone:</strong> (801) 626-7485
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-envelope fs-4 me-2"></i>
                      <strong>Email: </strong>
                      <a
                        href="mailto:timchapman@weber.edu"
                        className="text-decoration-none text-dark"
                      >
                        timchapman@weber.edu
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-building fs-4 me-2"></i>
                      <strong>Office:</strong> Lampros Hall, Room 205
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactHelp;
