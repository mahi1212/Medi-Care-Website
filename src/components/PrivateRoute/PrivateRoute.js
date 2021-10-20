import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth()
    // if(isLoading){
    //     return <Spinner animation="border" variant="success" />
    // } isLoading,  ---state Not working reload for reload optional
    
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />
            }
        />

    );
};

export default PrivateRoute;