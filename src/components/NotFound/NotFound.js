import React from 'react';
import './NotFound.css';
import notfound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <div class="container">
            <img src={notfound} alt="404" className='w-full' />            
            </div>
            
        </div>
    );
};

export default NotFound;