import React from 'react';
import { toast } from 'react-toastify';

const UsersData = ({ user,index,refetch }) => {
    const { email,role } = user;
    const makeAdmin = () =>{
        fetch(`https://dry-journey-86237.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            refetch();
            toast.success(`${email} is an admin now!!`);
        });
    }
    return (
            <tr>
                <th>{index+1}</th>
                <td>{email}</td>
                <td>{ role!=='admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                <td><button class="btn btn-xs">Remove User</button></td>
            </tr>
    );
};

export default UsersData;