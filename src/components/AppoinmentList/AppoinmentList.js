import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppoinmentList = (props) => {
    // console.log(props.service);
    const { category, docName, image, price, text, duration } = props.service;
    return (

        <div className="service">
            <Card className="service-single">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Title: {docName}</Card.Title>
                    <Card.Text>
                        Time : {price}
                    </Card.Text>
                    <Card.Text>
                        Catagory: {duration}
                    </Card.Text>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Text>
                        <Link to="/appoinment"><button>Call for Appoinment</button></Link>
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

export default AppoinmentList;