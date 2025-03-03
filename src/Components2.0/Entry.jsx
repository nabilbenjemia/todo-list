
export default function Main() {
    return (
        <div className="entry-layout">
            <img src="/japan.png" className="country-img" alt="country"/>
            <div className="country-info">
                <div className="location">
                    <img src="/marker.png" width="18px" height="16px" alt="marker" />
                    <span>Japan</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="maps-link"> View on Google Maps</a>
                </div>
                <h1 className="location-name">Mount Fuji</h1>
                <span className="date">12 Jan,2021 - 24 Jan,2021</span>
                <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}