
export default function Entry(props) {
    return (
        <div className="entry-layout">
            <img src={props.img} className="country-img" alt="country"/>
            <div className="country-info">
                <div className="location">
                    <img src="/marker.png" width="18px" height="16px" alt="marker" />
                    <span>{props.country}</span>
                    <a href={props.maps} className="maps-link"> View on Google Maps</a>
                </div>
                <h1 className="location-name">{props.location}</h1>
                <span className="date">{props.duration}</span>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}