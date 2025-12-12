import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../scripts/components/Header"
import Footer from "../scripts/components/Footer"
import { UserContext } from "../scripts/components/User-Context"

export const adminEmails = ["timchapman@weber.edu", "brookbrown@weber.edu"]

function Login() {
  const navigate = useNavigate()
  const { setUserRole } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail")
    if (rememberedEmail) {
      setEmail(rememberedEmail)
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address. Only a Weber State email will work.")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.")
      return
    }

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email)
    } else {
      localStorage.removeItem("rememberedEmail")
    }

    if (adminEmails.includes(email.toLowerCase())) {
      setUserRole(email)
      navigate("/admin-dash")
    } else if (email.toLowerCase().endsWith("@weber.edu")) {
      setUserRole(email)
      navigate("/user-dash")
    }
  }

  return (
    <div className="login">
      <Header />
      <main className="d-flex justify-content-center align-items-center vh-100 bg-light dash">
        <div className="card shadow-lg p-5 rounded-4" style={{ maxWidth: "500px", width: "90%" }}>
          <h2 className="text-center mb-4 fw-bold">Welcome Back!</h2>
          <p className="text-center text-muted mb-4">Sign in to your Weber account</p>

          {error && <div className="alert alert-danger text-center">{error}</div>}

          <form id="login-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-check-row">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="https://www.weber.edu/help/" className="forgot-password" target="_blank" rel="noreferrer">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100 mb-3 shadow-sm">
              Login
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Login
