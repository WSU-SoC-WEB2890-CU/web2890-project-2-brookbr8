import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UserProvider } from "./components/User-Context"
import Home from "../pages/Home"
import ContactHelp from "../pages/Contact-Help"
import Login from "../pages/Login"
import UserDash from "../pages/User-Dash"
import AdminDash from "../pages/Admin-Dash"
import ScrollToTop from "./components/ScrollToTop"
import TicketForm from "../pages/Ticket"
import Messages from "../pages/Message"
import "../styles/Main.css"

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-help" element={<ContactHelp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dash" element={<UserDash />} />
          <Route path="/admin-dash" element={<AdminDash />} />
          <Route path="/tickets" element={<TicketForm />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
