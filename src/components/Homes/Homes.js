import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import './Homes.css'
const Homes = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://ghastly-coffin-90373.herokuapp.com/offers')//./services.JSON
            .then(res => res.json())
            .then(data => setServices(data));

    })

    return (


        <div className="card-container">
            <div className="dancers-container">
                {
                    services.map(service => <Services
                        service={service} key={service.key}
                    ></Services>)

                }
            </div>
        </div>
    );
};

export default Homes;