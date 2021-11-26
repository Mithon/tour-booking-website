import React from 'react';
import { Card } from 'react-bootstrap';
import './Singleblog.css';

const Singleblog = (props) => {
    const { name, img, text } = props.service;
    return (

        <div className="service">


            <Card className="services-single">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Title: {name}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Text>
                        <a href="#">Read more..</a>
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>

    );
};
export default Singleblog;