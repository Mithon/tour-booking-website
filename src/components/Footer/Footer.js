import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Card className="text-center">
            <Card.Header>our speciality</Card.Header>
            <Card.Body>
                <Card.Title>Stop worrying about the potholes in the road and enjoy the journey</Card.Title>
                <Card.Text>
                    LOCATIONS
                </Card.Text>

                <address>203 Fake St. Mountain View, San Francisco, California, USA</address>

                <Button variant="primary" onClick='/myorder'>Booking your Tour Plan</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Copyright ©2021 All rights reserved @  Hero tour</Card.Footer>
        </Card>
    );
};

export default Footer;