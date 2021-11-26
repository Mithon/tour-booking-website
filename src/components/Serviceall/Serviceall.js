import React from 'react';
import { Card } from 'react-bootstrap';

const Serviceall = (props) => {
    // console.log(props.service);
    const { category, name, img, price, duration } = props.service;
    return (
        <div className="service">
            <div className="service-single">
                <img src={img} alt="" />
                <h4>Title : {name}</h4>
                <p>Course Categoty: {category}</p>
                <p>price : {price}</p>
                <p>Duration : {duration}</p>
            </div>
        </div>
    );
};


export default Serviceall;