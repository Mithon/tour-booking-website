import React, { useEffect, useState } from 'react';
import AppoinmentList from '../AppoinmentList/AppoinmentList';
import Serviceall from '../Serviceall/Serviceall';
import './Appoinment.css'

const Appoinment = () => {
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
                    services.map(service => <AppoinmentList
                        service={service} key={service.key}
                    ></AppoinmentList>)

                }
            </div>
        </div>
    );
};

export default Appoinment;