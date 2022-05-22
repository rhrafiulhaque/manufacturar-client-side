import React from 'react';
import './Product.css';
import Readmore from '../Readmore/Readmore';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { _id, name, quantity, img, price, description,avilable_quantity,minimum_order_quantity } = product;
    const navigate = useNavigate();
    const buyProduct=id=>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center product">
                <h2 className="card-title">{name}</h2>
                <h3 className=' font-semibold'>${price}</h3>
                <p><Readmore message={description}></Readmore></p>
                <p>Available Order: {avilable_quantity}</p>
                <p>Minimum Order Quantity: {minimum_order_quantity}</p>
                <button className="btn btn-secondary" onClick={()=>buyProduct(_id)}>Buy Now</button>
            </div> 
        </div>
    );
};

export default Product;