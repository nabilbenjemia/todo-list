import { createRoot } from "react-dom/client";
import Header from "./Components2.0/Header";
import App2 from "./App2";

const root = createRoot(document.getElementById("root"))

export default function App3() {
    return (
        <Header />
    )
}

root.render(<App2 />)