import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./User-Context"

function DashHeader() {
  const navigate = useNavigate()
  const { role } = useContext(UserContext)

  const handleLogout = () => {
    navigate("/login")
  }

  const dashboardPath = role === "admin" ? "/admin-dash" : "/user-dash"

  return (
    <aside className="dash-header">
      <div className="dash-logo">
        <img src="./ticket-white.svg" alt="WSU Logo" />
        <h2>STA System</h2>
      </div>

      <nav className="dash-nav">
        <Link className="nav-button" to={dashboardPath}>
          Dashboard
        </Link>
        <Link className="nav-button" to="/tickets">
          Tickets
        </Link>
        <Link className="nav-button" to="/messages">
          Messages
        </Link>
      </nav>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  )
}

export default DashHeader
