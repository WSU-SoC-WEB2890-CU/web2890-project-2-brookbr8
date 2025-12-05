import DashHeader from "../scripts/components/Dash-Header"

function AdminDash() {
  const openTickets = [
    { id: 1, title: "Printer not working", urgent: true },
    { id: 2, title: "Computer login issue", urgent: false },
    { id: 3, title: "Network outage", urgent: true },
  ]

  const notifications = ["STA not working on Dec 25th", "Team meeting on Dec 10th"]

  const messages = [
    { id: 1, from: "Tim", content: "Please review ticket #2" },
    { id: 2, from: "Brook", content: "Reminder: Update all computers to WIN 11" },
  ]

  return (
    <div className="dashboard">
      <DashHeader />

      <main className="dashboard-content">
        <h1>Welcome to your Dashboard, STA!</h1>

        <div className="dashboard-grid">
          <div className="dashboard-row">
            <section className="dashboard-section">
              <h2>Open Tickets ({openTickets.length})</h2>
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

export default AdminDash
