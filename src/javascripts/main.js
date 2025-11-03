//TODO - Your ES6 JavaScript code (if any) goes here

// main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("IT Ticketing System loaded successfully.")

  // Navbar Collapse
  const navbarCollapse = document.querySelector(".navbar-collapse")
  const navLinks = document.querySelectorAll(".navbar-nav a")

  if (navbarCollapse && navLinks.length > 0) {
    // Close when link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse)
        if (bsCollapse) bsCollapse.hide()
      })
    })

    // Clicking Outside
    document.addEventListener("click", (e) => {
      const navbar = document.querySelector(".navbar")
      const toggler = document.querySelector(".navbar-toggler")

      if (
        navbarCollapse.classList.contains("show") &&
        !navbar.contains(e.target) &&
        (!toggler || !toggler.contains(e.target))
      ) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse)
        if (bsCollapse) bsCollapse.hide()
      }
    })
  }

  // Login Form
  const loginForm = document.getElementById("login-form")
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const rememberMe = document.getElementById("rememberMe")

  if (loginForm && emailInput && passwordInput && rememberMe) {
    const alertContainer = document.getElementById("alert-container")

    // Fill Info if Saved
    const savedEmail = localStorage.getItem("rememberedEmail")
    const savedPassword = localStorage.getItem("rememberedPassword")
    if (savedEmail && savedPassword) {
      emailInput.value = savedEmail
      passwordInput.value = savedPassword
      rememberMe.checked = true
    }

    // ShowAlerts
    function showAlert(message, type = "danger") {
      if (!alertContainer) return
      alertContainer.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `
    }

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = emailInput.value.trim()
      const password = document.getElementById("password")?.value.trim() || ""

      // Remember Email / Password
      if (rememberMe.checked) {
        localStorage.setItem("rememberedEmail", email)
        localStorage.setItem("rememberedPassword", password)
      } else {
        localStorage.removeItem("rememberedEmail")
      }

      const adminList = ["brookbrown@weber.edu", "timchapman@weber.edu"]

      if (adminList.includes(email)) {
        window.location.href = "admin-dash.html"
        return
      }

      if (email.endsWith("@weber.edu")) {
        window.location.href = "user-dash.html"
        return
      }

      showAlert("Your email is not recognized. Please make sure you use your Weber credentials.", "danger")
    })
  }
})

// Tickets
document.addEventListener("DOMContentLoaded", () => {
  const tickets = [
    { id: 12345, title: "Printer not working", status: "Pending" },
    { id: 12346, title: "Cannot login to VPN", status: "In Progress" },
  ]

  const notifications = [
    "Campus closed Nov. 27-28. STAs will not be on campus",
    "System maintenance scheduled for Saturday",
  ]

  // Populate Tickets Example
  const ticketList = document.getElementById("open-tickets")
  const totalTickets = document.getElementById("total-tickets")
  const pendingTickets = document.getElementById("pending-tickets")
  const resolvedTickets = document.getElementById("resolved-tickets")

  ticketList.innerHTML = tickets
    .map(
      (t) => `
      <li class="list-group-item">
        <strong>#${t.id}</strong> ${t.title}
        <span class="badge ${
          t.status === "Pending" ? "bg-warning" : t.status === "Resolved" ? "bg-success" : "bg-info"
        }">${t.status}</span>
      </li>
    `
    )
    .join("")

  totalTickets.textContent = tickets.length
  pendingTickets.textContent = tickets.filter((t) => t.status === "Pending").length
  resolvedTickets.textContent = tickets.filter((t) => t.status === "Resolved").length

  // Populate Notifications Example
  const notifList = document.getElementById("notifications")
  notifList.innerHTML = notifications.map((n) => `<li class="list-group-item">${n}</li>`).join("")
})

// Side Tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("#ticketTabs .nav-link")
  const tabPanes = document.querySelectorAll(".tab-pane")

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault()

      tabs.forEach((t) => t.classList.remove("active"))

      tab.classList.add("active")

      const target = tab.getAttribute("data-tab")

      tabPanes.forEach((pane) => pane.classList.remove("active"))

      const activePane = document.getElementById(target)
      if (activePane) activePane.classList.add("active")
    })
  })
})
