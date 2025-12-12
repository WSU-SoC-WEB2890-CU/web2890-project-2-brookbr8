import { createContext, useState, useEffect } from "react"
import { adminEmails } from "../../pages/Login"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)

  const setUserRole = (email) => {
    setUser(email)
    if (adminEmails.includes(email.toLowerCase())) {
      setRole("admin")
    } else {
      setRole("user")
    }
  }

  return <UserContext.Provider value={{ user, role, setUserRole }}>{children}</UserContext.Provider>
}
