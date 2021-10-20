import React, { useContext } from 'react';
import useAuth from '../../hook/useAuth';
import loginEnim from '../../Images/login.png'
const Login = () => {
    const {signInUsingGoogle} = useAuth()

    return (
        <div className='d-flex flex-wrap my-5'>
            <div>
                <img src={loginEnim} alt="" />
            </div>
            <div className='pt-3 px-4 ms-5'>
                <h3 className='mt-5 pt-5'>Login Page</h3>
                <form>
                    <div className="mb-3 mt-5">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit"  className="btn btn-primary">Submit</button>
                </form>
                {/* onClick={handleSubmit} */}
                <p className='text-secondary py-3'> ____________________ <sub>or</sub> ____________________</p>
                <button className='btn btn-primary px-5 mx-auto' onClick={signInUsingGoogle}><span className='px-4'>Sign in using Google</span></button>
            </div>
        </div>
    );
};

export default Login;