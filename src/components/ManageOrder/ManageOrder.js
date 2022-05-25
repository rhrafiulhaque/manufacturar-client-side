import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmo from '../DeleteConfirm/DeleteConfirmo';
import Loading from '../Loading/Loading';
import OrderRow from './OrderRow';

const ManageOrder = () => {
    const[deletingProduct,setDeletingProduct] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/allorders').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-green-500 text-center my-4'>Manage Products : {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Address</th>
                            <th>Product Name</th>
                            <th>Product <br /> Price</th>
                            <th>Product <br /> Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            setDeletingProduct={setDeletingProduct}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteConfirmo
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirmo>}
        </div>
    );
};

export default ManageOrder;