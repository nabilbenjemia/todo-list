import { createRoot } from "react-dom/client"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"

const root = createRoot(document.getElementById("root"))

export default function App2() {
    return (
    <>
        <Navbar />
        <Main />
    </>
    )
}

root.render(
    <App2 />
)
