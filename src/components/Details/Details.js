import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Details = () => {
    const history = useHistory()
    const { idNumber } = useParams()
    const [det, setDet] = useState({})
    useEffect(() => {
        const url = `https://raw.githubusercontent.com/mahi1212/fakemediservice${idNumber}/main/mediserv.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setDet(data[0]))
    }, [])

    const handleGoBack = () =>{
        history.push('/services')
    }
    return (
        <div className='pt-4 text-center'>
            <h3 className='mt-5 text-uppercase'>{det.Title}</h3>
            <Card className='row'>
                <Card.Body className='d-flex flex-wrap'>
                    <Card.Img variant="top" src={det.img} style={{width:'50%', margin:'0 auto'}}/>
                    <div className='mt-md-5'>
                        <Card.Text >
                            <h5>{det.Desc}</h5>
                            <p>Price : {det.Price}</p>
                        </Card.Text>
                        <Button variant="success" onClick={handleGoBack}>Go back</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;