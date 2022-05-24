import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const WelcomAdmin = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
             <h2 className='text-9xl font-bold text-green-600 text-center'> Hello Admin, {user.displayName}</h2>
        </div>
    );
};

export default WelcomAdmin;