import React, { useEffect, useState } from 'react';
import DepartmentList from '../DepartmentList/DepartmentList';
import Services from '../Services/Services';
import './Department.css'

const Department = () => {
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
                    services.map(service => <DepartmentList
                        service={service} key={service.key}
                    ></DepartmentList>)

                }
            </div>
        </div>
    );
};
export default Department;