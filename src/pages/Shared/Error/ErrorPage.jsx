import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/error.jpg';
import { Image } from 'react-bootstrap';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className='text-center'>
            <h1 className='display-3'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Image src={errorImg}/>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;