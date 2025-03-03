import { createRoot } from "react-dom/client";
import Header from "./Components2.0/Header";
import Entry from "./Components2.0/Entry"
//const root = createRoot(document.getElementById("root"))

export default function App3() {
    return (
        <>
        <Header />
        <Entry />
        </>
    )
}

//root.render(<App3 />)