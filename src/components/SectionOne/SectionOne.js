import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, img } from 'react-bootstrap';
import './SectionOne.css';

const SectionOne = () => {
    return (
        <Card className="text-centers">
            <Card.Header><small><i>Download Our Mobile App</i></small></Card.Header>
            <Card.Body>
                <img
                    className="w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptWqmQlQT2euP_WhRtI9Ld6JTj6FsD1qHd2X3L-AngPVXw0-WUym_WRdR5ySeFhtjvQ&usqp=CAU"
                    alt="second slide"
                />
                <Card.Title><h1><b>Book Your First Tour Through Our Mobile App</b></h1></Card.Title>

                <Card.Text>
                    <p> I try to focus on my screen as the conversation keeps intruding into my thoughts Not many search by phone number explicitly, though the mobile app works</p>
                </Card.Text>

                <Button variant="primary" onClick='/myorder'>DOWNLOAD APP FORM PLAY STORE</Button>
                <Button variant="primary" onClick='/myorder'>DOWNLOAD APP FORM APPLE STORE</Button>
            </Card.Body>

        </Card>
    );
};

export default SectionOne;