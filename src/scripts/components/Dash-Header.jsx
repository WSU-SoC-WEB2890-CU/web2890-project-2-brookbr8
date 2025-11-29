import { Link, useNavigate } from "react-router-dom"

function DashHeader() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <aside className="dash-header">
      <div className="dash-logo">
        <img src="./ticket-white.svg" alt="WSU Logo" />
        <h2>STA System</h2>
      </div>

      <nav className="dash-nav">
        <Link className="nav-button" to="/user-dash">
          Dashboard
        </Link>
        <Link className="nav-button" to="/tickets">
          My Tickets
        </Link>
        <Link className="nav-button" to="/profile">
          Profile
        </Link>
      </nav>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  )
}

export default DashHeader
