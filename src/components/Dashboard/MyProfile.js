import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyProfile = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

    // User From DB Mongo 
    const [dbUser, setDBuser] = useState('');
    useEffect(() => {
            fetch(`http://localhost:5000/user/${user?.email}`)
                .then(res => res.json())
                .then(data => setDBuser(data));

    }, [user?.email]);



    if (updating) {
        return <Loading></Loading>
    }

    // Update User Profile 
    const updateDBProfile = (currentUser) => {
        if (user.email) {
            fetch(`http://localhost:5000/user/${user?.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                })
        }
    }
    const handleUpdate = async event => {
        event.preventDefault();
        const username = event.target.username.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const facebook = event.target.facebook.value;
        const twitter = event.target.twitter.value;
        const currentUser = {
            address: address,
            phone: phone,
            facebook: facebook,
            twitter: twitter
        }

        await updateProfile({ displayName: username });
        await updateDBProfile(currentUser);
        toast.success('Profile Updated');
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-green-500 text-center my-4'>My Profile</h2>
            <div class="w-full mx-auto max-w-lg">
                <form onSubmit={handleUpdate} class="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4" >
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" defaultValue={user.displayName} type="text" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='email' disabled type="text" value={user.email} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                            Address
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='address' defaultValue={dbUser[0]?.address} type="text" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                            Phone
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" defaultValue={dbUser[0]?.phone} name='phone' type="number" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="facebook">
                            Facebook
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" defaultValue={dbUser[0]?.facebook} name='facebook' type="text" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="twitter">
                            Twitter
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" defaultValue={dbUser[0]?.twitter} name='twitter' type="text" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;