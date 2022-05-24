import React from 'react';

const UsersData = ({ user,index }) => {
    const { email } = user;
    return (
            <tr>
                <th>{index+1}</th>
                <td>{email}</td>
                {/* <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td> */}
                <td><button class="btn btn-xs">Remove User</button></td>
            </tr>
    );
};

export default UsersData;