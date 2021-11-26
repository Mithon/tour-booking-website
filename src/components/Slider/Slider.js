import React from 'react';
import { Carousel, img } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className=" w-100"
                    src="https://www.tourx-react.egenslab.com/static/media/banner-3.ff884c34.png"
                    alt="frist slide"
                />
                <Carousel.Caption>
                    <h1>Plan Your Best Holiday With Us and Enjoy</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <Image
                    className=" w-100"
                    src="https://explore-work.com/wp-content/uploads/2018/03/feature_work-experiences.jpg"
                    alt="Third slide"
                ></Image> */}
                <img
                    className=" w-100"
                    src="https://www.tourx-react.egenslab.com/static/media/banner-4.1478080c.png"
                    alt="second slide"
                />
                <Carousel.Caption>
                    <h2>WE PROVIDE WORLD CLASS SERVICES...!!</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" w-100"
                    src="https://www.tourx-react.egenslab.com/static/media/banner-3.ff884c34.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>The Top Places For</h3>
                    <h1>Planning Your Holiday</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;