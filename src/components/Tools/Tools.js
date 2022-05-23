import React, { useEffect, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import Product from '../Product/Product';

const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    })
    const navigate = useNavigate();
    const showMore=()=>{
        navigate('/products');
    }
    return (
        <div className='my-8 text-center'>
            <h3 className='text-primary  text-4xl text-center font-bold uppercase'>Our Products</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.slice(0,6).map(product=><Product key={product._id} product={product}></Product>)
                }              
            </div>            
            <button className='btn btn-outline btn-warning mt-9' onClick={showMore}>Show More</button>
        </div>
    );
}; 

export default Tools;