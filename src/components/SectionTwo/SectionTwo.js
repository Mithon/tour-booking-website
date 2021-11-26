import React from 'react';
import { Card } from 'react-bootstrap';
import './SectionTwo.css';

const SectionTwo = () => {
    return (
        <Card className="text-centers sectwo">
            <Card.Header><h1><i>Please Subcrib Our Site for get extra 25% OFF</i></h1></Card.Header>
            <Card.Body>
                <form>
                    <input placeholder="Send Your Email" />
                    <input type="submit" />
                </form>
            </Card.Body>

        </Card>
    );
};

export default SectionTwo;