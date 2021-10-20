import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='py-3 px-5 bg-dark text-white footer'>
            <div className='row'>
                <div className="col-md-4 ps-5">
                    <h3 className='text-warning'>MediCare</h3>
                    <i className="fas fa-phone-square-alt my-2"><span className='mx-3 text-warning'> +880177828XXXX</span></i>
                    <br />
                    <i className="fas fa-thumbtack my-2"><span className='mx-3 text-warning'> Sylhet, Bangledesh</span></i>
                    <br />
                    <i className="fas fa-envelope my-2"><span className='mx-3 text-warning'> medicare@gmail.com</span></i>
                </div>
                <div className="col-md-4">
                    <h3 className='text-warning'>Link</h3>
                    <Link to='/services'>Service Section</Link> <br />
                    <Link to='/reviews'>About Us</Link> <br />
                    <Link to='/about'>Reviews</Link>
                </div>
                <div className="col-md-4">
                    <h3 className='text-warning'>Contact Developers</h3>
                    <ul>
                        <li>
                            <i className="fas fa-phone-square-alt my-2"><span className='mx-3 text-warning'> +88017125544XX</span></i>
                        </li>
                        <li>
                            <i className="fas fa-envelope my-2"><span className='mx-3 text-warning'> devmad@gmail.com</span></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;