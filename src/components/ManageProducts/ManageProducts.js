import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirm from '../DeleteConfirm/DeleteConfirm';
import Loading from '../Loading/Loading';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const[deletingProduct,setDeletingProduct] = useState(null);
    const { data: products, isLoading,refetch } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-green-500 text-center my-4'>Manage Products : {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>Product Img</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct&& <DeleteConfirm
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirm>}
        </div>
    );
};

export default ManageProducts;