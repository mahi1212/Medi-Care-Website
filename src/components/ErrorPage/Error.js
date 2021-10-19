import React from 'react';
import errorImage from '../../Images/404 Error.png'
import './Error.css'
const Error = () => {
    return (
        <div>
            <img src={errorImage} alt="" />
        </div>
    );
};

export default Error;