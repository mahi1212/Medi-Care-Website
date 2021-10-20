import React from 'react';
import { Carousel } from 'react-bootstrap';
import review1 from '../../Images/review1.jpeg'
import review2 from '../../Images/review2.jpg'
import review3 from '../../Images/review3.jpeg'

const Reviews = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src={review1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-white'>
                        <h5>First Review</h5>
                        <p>I was ill and gone to them.They treat very well. Also price was reasonable</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={review2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-white'>
                        <h5>Second Review</h5>
                        <p>I have to visit them for a test. Their machine was good and fast i got my result</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto"
                        src={review3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-success'>
                        <h5>Third Review</h5>
                        <p>Praesent was very good. I recommend to go to them</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Reviews;