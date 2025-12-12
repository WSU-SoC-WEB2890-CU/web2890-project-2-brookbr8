import { useState, useContext, useEffect } from "react"
import { db } from "../firebase"
import { ref, push, set, onValue } from "firebase/database"
import DashHeader from "../scripts/components/Dash-Header"
import { UserContext } from "../scripts/components/User-Context"

function Messages() {
  const { userEmail } = useContext(UserContext)
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const [status, setStatus] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const messagesRef = ref(db, "messages")
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {}
      const msgList = Object.keys(data)
        .map((key) => ({
          id: key,
          ...data[key],
        }))
        .sort((a, b) => b.createdAt - a.createdAt)
      setMessages(msgList)
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("")

    if (!subject.trim() || !body.trim()) {
      setStatus("Please fill in both subject and message body.")
      return
    }

    try {
      const newRef = push(ref(db, "messages"))
      await set(newRef, {
        subject,
        body,
        createdAt: Date.now(),
      })
      setStatus("Message sent successfully!")
      setSubject("")
      setBody("")
    } catch (error) {
      console.error("Error sending message:", error)
      setStatus("Failed to send message. Please try again.")
    }
  }

  return (
    <div className="dashboard-layout">
      <DashHeader />
      <main className="messages-content">
        <h1 className="page-title">Messages</h1>

        <section className="new-message card">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} className="message-form">

            <label>
              Subject:
              <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </label>

            <label>
              Message:
              <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
            </label>

            {status && <p className="status-message">{status}</p>}

            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </section>

        <section className="messages-list card">
          <h2>All Messages</h2>
          {messages.length === 0 && <p>No messages yet.</p>}
          <ul>
            {messages.map((msg) => (
              <li key={msg.id} className="message-item">
                <div className="message-header">
                  <strong>{msg.subject}</strong>
                </div>
                <p className="message-body">{msg.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Messages
