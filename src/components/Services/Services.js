import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
     
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mahi1212/fakemediService/main/mediserv.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    return (
        <div>
            <div className='pt-5 pb-4 text-uppercase text-warning text-center'>
                <h2 className='mt-5 pb-2 border '>Our Services</h2>
            </div>
            <Row xs={1} md={3} className="g-4 px-sm-5">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;