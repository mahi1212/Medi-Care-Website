import React from 'react';
import { Accordion } from 'react-bootstrap';
import aboutImage from '../../Images/About us page-bro.png'
const AboutUs = () => {
    return (
        <div>
            <div>
                <img src={aboutImage} alt="" />
                <div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3>WHO WE ARE ? </h3></Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Social worker</li>
                                    <li>Unicef employee</li>
                                </ul>
                                We are the general people who is trying to reach all patients for their betterment.  We personally care for those people. And we try to give our best to customer with reasonable price!
                                Now a days we are contacting to our nearable heath administry so that we can give service to the government worker at lower cost.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" flush>
                            <Accordion.Header><h3>Whats our plan ? </h3></Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>To work with full of our heartist satisfiction</li>
                                    <li>To work with full of customers satisfiction</li>
                                    <li>To work for huminity</li>
                                    <li>To serve poor patient with free of cost</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;