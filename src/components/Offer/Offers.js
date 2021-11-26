import React, { useEffect, useState } from 'react';
import OfferList from '../OfferList/OfferList';
import './Offers.css'

const Offers = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://ghastly-coffin-90373.herokuapp.com/offers')//./services.JSON
            .then(res => res.json())
            .then(data => setServices(data));

    })


    return (
        <div className="card-container">
            <div className="dancer-container">

                {
                    services.map(service => <OfferList
                        service={service} key={service.key}
                    ></OfferList>)

                }
            </div>
        </div>
    );
};

export default Offers;