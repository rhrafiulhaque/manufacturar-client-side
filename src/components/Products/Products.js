import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dry-journey-86237.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    })
    return (
        <div className='my-8'>
            <h3 className='text-primary  text-4xl text-center font-bold uppercase'>Our Products</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;