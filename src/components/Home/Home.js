import React from 'react';
import { Link } from 'react-router-dom';
import bannerPic from '../../Images/banner1.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner-text'>
                <h2>Looking for madical services ?</h2>
                <h4>We are giving the best service of town!</h4>
            </div>
            <img src={bannerPic} style={{ width: '100%', height: '100vh' }} alt="" />
            <div className='link'>
                <p>We are providing medicare lab since 2012. Customers are happy with our services! <br /> Feel free to visit us. </p>
                <p>Find Our Services here <Link to='/services'>Services</Link> </p>
            </div>
            <div className='text-center pb-4 pt-3'>
                <h2 className='py-3'>Why Customer <span className='text-warning'> Choose Us ? </span></h2>
                <div className='btn-list col-md-12'>
                    <button className='rounded rounded-pill px-3 py-2 mx-2'>Excellent service</button>
                    <button className='rounded rounded-pill px-3 py-2 mx-2'>High-quality lab</button>
                    <button className='rounded rounded-pill px-3 py-2 mx-2'>Variety of visuals</button>
                    <button className='rounded rounded-pill px-3 py-2 mx-2'>Low prices</button>
                </div>
            </div>
        </div>
    );
};

export default Home;