import React from "react"
import { createRoot } from "react-dom/client"
import TodoContainer from "./components/TodoContainer"
import "./styles.css"

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TodoContainer/>
    </React.StrictMode>
)
