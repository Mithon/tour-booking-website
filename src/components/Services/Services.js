import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = (props) => {
    // console.log(props.service);
    const { docName, img, price, text } = props.service;
    return (

        <div className="service">
            <Card className="service-single">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Title: {docName}</Card.Title>
                    <Card.Text>
                        4 day tour cost : {price}
                    </Card.Text>
                    <Card.Text>
                        Discription : {text}
                    </Card.Text>
                    <Card.Text>
                        <Link to="/myorder"><button>View Details</button></Link>

                    </Card.Text>
                </Card.Body>
            </Card>


        </div>





        // <div>
        //     <h1>{name}</h1>
        //     <img src={img} alt="" />
        //     <h1>{price}</h1>
        //     <h1>{stock}</h1>
        // </div>
    );
};

export default Services;