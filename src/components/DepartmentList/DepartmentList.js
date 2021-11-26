import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DepartmentList = (props) => {
    // console.log(props.service);
    const { category, name, img, price, text, duration } = props.service;
    return (

        <div className="service">
            <Card className="service-single">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Title: {name}</Card.Title>
                    <Card.Text>
                        {category}
                    </Card.Text>
                    <Card.Text>
                        Time : {price}
                    </Card.Text>
                    <Card.Text>
                        Catagory: {duration}
                    </Card.Text>
                    <Card.Text>
                        Sort dis: {text}
                    </Card.Text>
                    <Card.Text>
                        <Link to="/appoinment"><button>View Details</button></Link>
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


export default DepartmentList;