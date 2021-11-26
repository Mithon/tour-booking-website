import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://ghastly-coffin-90373.herokuapp.com/offers')
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
export default Home;