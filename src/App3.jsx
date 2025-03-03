import { createRoot } from "react-dom/client";
import Header from "./Components2.0/Header";
import Entry from "./Components2.0/Entry"
//const root = createRoot(document.getElementById("root"))

export default function App3() {
    return (
        <>
        <Header />
        <Entry img="https://scrimba.com/links/travel-journal-japan-image-url"
                country="Japan" 
                maps ="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.
                // 7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df
                // !8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                location="Mount Fuji"
                duration="12 Jan,2021 - 24 Jan,2021"
                description="Mount Fuji is the tallest mountain in Japan, standing 
                at 3,776 meters (12,380 feet). Mount Fuji is the single most popular 
                tourist site in Japan, for both Japanese and foreign tourists."/>

        <Entry img="https://scrimba.com/links/travel-journal-australia-image-url"
                country="Australia" 
                maps ="https://www.google.com/maps/place/Op%C3%A9ra+de+Sydney/@-33
                // .8567844,151.2127218,16z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892
                // fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZ
                // fbm0?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
                location="Sydney Opera House"
                duration="27 May, 2023 - 8 Jun, 2023"
                description="The Sydney Opera House is a multi-venue performing arts centre
                 in Sydney. Located on the banks of the Sydney Harbour, it is often regarded
                  as one of the 20th century's most famous and distinctive buildings."/>
        
        <Entry img="https://scrimba.com/links/travel-journal-norway-image-url"
                country="Norway" 
                maps ="https://www.google.com/maps/place/Geirangerfjord/@62.1048242,6.9922387
                // ,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d6
                // 2.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDS
                // oASAFQAw%3D%3D"
                location="Geirangerfjord"
                duration="01 Oct, 2024 - 18 Nov, 2024"
                description="The Geiranger Fjord is a fjord in the Sunnmøre region of 
                Møre og Romsdal county, Norway. It is located entirely in the Stranda 
                Municipality."/>
        </>
    )
}

//root.render(<App3 />)