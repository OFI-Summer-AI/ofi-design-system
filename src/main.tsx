import React from "react"
import ReactDOM from "react-dom/client"
import DocsApp from "./docs/DocsApp"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="dark">
      <DocsApp />
    </div>
  </React.StrictMode>,
)
