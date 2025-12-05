import DashHeader from "../scripts/components/Dash-Header"

function UserDash() {
  const openTickets = [
    { id: 1, title: "Printer not working", urgent: false },
    { id: 2, title: "Computer login issue", urgent: false },
  ]

  const notifications = ["STA not working on Dec 25th", "System under maintenance Dec 23rd "]

  const messages = [
    { id: 1, from: "Cody", content: "Is there any update on my printer?" },
    { id: 2, from: "Brook", content: "Yes, we have got your printer up and running and are running tests." },
  ]

  return (
    <div className="dashboard">
      <DashHeader />

      <main className="dashboard-content">
        <h1>Welcome to your Dashboard!</h1>

        <div className="dashboard-grid">
          <div className="dashboard-row">
            <section className="dashboard-section">
              <h2>Your Open Tickets ({openTickets.length})</h2>
              <ul>
                {openTickets.map((ticket) => (
                  <li key={ticket.id} className={ticket.urgent ? "urgent" : ""}>
                    {ticket.title} {ticket.urgent && "(URGENT)"}
                  </li>
                ))}
              </ul>
            </section>

            <section className="dashboard-section">
              <h2>Notifications</h2>
              <ul>
                {notifications.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="dashboard-section full-width">
            <h2>Messages</h2>
            <ul>
              {messages.map((msg) => (
                <li key={msg.id}>
                  <strong>{msg.from}:</strong> {msg.content}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}

export default UserDash
