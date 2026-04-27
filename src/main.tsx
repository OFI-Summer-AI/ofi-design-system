import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

document.documentElement.classList.add("dark")
document.body.classList.add("dark")

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="dark">
      <App />
    </div>
  </React.StrictMode>,
)
