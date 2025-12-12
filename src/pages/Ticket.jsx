import { useState, useEffect, useContext } from "react"
import { db } from "../firebase"
import { ref, onValue, push, set } from "firebase/database"
import DashHeader from "../scripts/components/Dash-Header"
import { UserContext } from "../scripts/components/User-Context"

function Tickets() {
  const { role, userEmail } = useContext(UserContext)

  const [tickets, setTickets] = useState([])
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    urgent: false,
    department: "",
    contactName: "",
    contactEmail: userEmail || "",
    contactPhone: "",
  })
  const [error, setError] = useState("")

  useEffect(() => {
    const ticketsRef = ref(db, "tickets")
    onValue(ticketsRef, (snapshot) => {
      const data = snapshot.val() || {}
      const ticketList = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }))

      const openTickets = ticketList
        .filter((ticket) => ticket.status === "open")
        .sort((a, b) => b.createdAt - a.createdAt)

      setTickets(openTickets)
    })
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setNewTicket((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!newTicket.title || !newTicket.description || !newTicket.department) {
      setError("Please fill in all required fields.")
      return
    }

    try {
      const ticketsRef = ref(db, "tickets")
      const newRef = push(ticketsRef)

      await set(newRef, {
        ...newTicket,
        status: "open",
        createdAt: Date.now(),
      })

      setNewTicket({
        title: "",
        description: "",
        urgent: false,
        department: "",
        contactName: "",
        contactEmail: userEmail || "",
        contactPhone: "",
      })

      alert("Ticket created successfully!")
    } catch (err) {
      console.error("Error creating ticket:", err)
      setError("Failed to create ticket: " + err.message)
    }
  }

  return (
    <div className="dashboard-layout">
      <DashHeader />

      <main className="tickets-content">
        <section className="ticket-list">
          <h2>Open Tickets ({tickets.length})</h2>
          <div className="ticket-cards">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="ticket-card">
                <div className="ticket-header">
                  <strong className="ticket-title">{ticket.title}</strong>
                  {ticket.urgent && <span className="urgent-badge">URGENT</span>}
                </div>
                <p className="ticket-desc">{ticket.description}</p>
                <p>
                  <strong>Department:</strong> {ticket.department}
                </p>
                <p>
                  <strong>Contact:</strong> {ticket.contactName} ({ticket.contactEmail}, {ticket.contactPhone})
                </p>
                <p className="ticket-date">
                  <strong>Created:</strong> {new Date(ticket.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="new-ticket-form card">
          <h2>Create New Ticket</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit} className="ticket-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newTicket.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newTicket.description}
              onChange={handleChange}
              required
            />
            <select name="department" value={newTicket.department} onChange={handleChange} required>
              <option value="">Select Department</option>
              <option value="International">International</option>
              <option value="Student Services">Student Services</option>
              <option value="Miller Admin">Miller Admin</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="contactName"
              placeholder="Contact Name"
              value={newTicket.contactName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="contactEmail"
              placeholder="Contact Email"
              value={newTicket.contactEmail}
              onChange={handleChange}
            />
            <input
              type="text"
              name="contactPhone"
              placeholder="Contact Phone"
              value={newTicket.contactPhone}
              onChange={handleChange}
            />

            <label className="checkbox-row">
              <input type="checkbox" name="urgent" checked={newTicket.urgent} onChange={handleChange} />
              <span>Mark as urgent</span>
            </label>

            <button type="submit" className="submit-btn">
              Create Ticket
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Tickets
