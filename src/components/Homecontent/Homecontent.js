import React, { useEffect, useState } from 'react';

import Serviceall from '../Serviceall/Serviceall';

import './Homecontent.css';

const Homecontent = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./serviceall.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    })

    return (
        <div className="card-container">
            <div className="dancer-container">

                {
                    services.map(service => <Serviceall
                        service={service} key={service.key}
                    ></Serviceall>)

                }
            </div>
        </div>
    );
};

export default Homecontent;