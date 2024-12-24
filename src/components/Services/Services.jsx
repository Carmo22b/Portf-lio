import "./Services.css"

import theme_pattern from "../../assets/imgs/search_12957877.png";

import Services_Data from "../../assets/Services_data"

function Services() {
    return (
        <div id="services" className="services">
            <div className="service-title">
                <h1>Meus Serviços</h1>

                <img src={theme_pattern} alt="Carmo" />
            </div>

            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>

                        <h2>{service.s_name}</h2>

                        <p>{service.s_desc}</p>

                        <div className="services-readmore">

                        </div>
                    </div>

                })}
            </div>
        </div>
    )
}

export default Services