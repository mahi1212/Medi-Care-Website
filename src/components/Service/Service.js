import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, Title, Desc, img } = props.service
    // console.log(props.service)

    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={img} className='image' />
                        <Card.Title>{Title}</Card.Title>
                        <Card.Text>
                            {Desc.slice(1, 140).concat('...')}
                        </Card.Text>
                        <Link to={`/service/${id}`}>View Details</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;