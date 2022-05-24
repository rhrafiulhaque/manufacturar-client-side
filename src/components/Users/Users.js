import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UsersData from './UsersData/UsersData';

const Users = () => {

    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-green-500 text-center my-4'>Users List</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Add Admin</th>
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <UsersData
                                key={user._id}
                                user={user}
                                index = {index}
                                refetch={refetch}
                            ></UsersData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;