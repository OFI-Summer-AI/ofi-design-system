import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

const stored = window.localStorage.getItem("ofi-theme")
const initialTheme = stored === "light" || stored === "dark" ? stored : "dark"
if (initialTheme === "dark") {
  document.documentElement.classList.add("dark")
  document.body.classList.add("dark")
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
