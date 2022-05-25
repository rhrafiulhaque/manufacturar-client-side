import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ order, index, setDeletingProduct }) => {    

    const handleShip = ()=>{
        console.log('Shipped' ,order._id)
        fetch(`https://dry-journey-86237.herokuapp.com/ordership/${order._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
            }).then(res=>res.json())
            .then(data => {
                toast.success('Shipped Success');
                console.log(data);
            })
    }

    const { username, email, address, productname, quantity, price } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{username}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{productname}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                {(order.price && order.paid) && <span className='btn btn-xs btn-success mr-2'>Paid</span>}
                {(order.price && !order.paid) && <span className='btn btn-xs btn-error mr-2'>unpaid</span>}

                {(!order.paid && !order.shipped ) && <span className='btn btn-xs btn-warning mr-2'>Pending</span>}
                {(order.paid && order.shipped ) && <span className='btn btn-xs btn-sucess mr-2'>Shipped</span>}
                
                {(!order.shipped ) && <button className='btn btn-xs btn-info mr-2' onClick={handleShip}>Ship</button>}
                
                
                <label className='btn btn-xs btn-error mr-2' onClick={() => setDeletingProduct(order)} for="delete-confirm-modal-order">Cancel</label>
            </td>
        </tr>
    );
};

export default OrderRow;