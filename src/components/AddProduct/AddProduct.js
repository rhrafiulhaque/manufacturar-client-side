import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    
    const [productImg, setProductImg] =useState([]);
    const imgStorageKey ='2b240b0e8183cd0f4b0ff7d52cb9700b';

    const myHandler =(events)=>{
        setProductImg(events.target.files[0]);
    }
    
    const handleAddProduct = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const avilable_quantity = event.target.avilable_quantity.value;
        const minimum_order_quantity = event.target.minimum_order_quantity.value;

        // // Image Data Process         
        const formData = new FormData();
        formData.append('image', productImg);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img = result.data.url;
                const productData ={
                    name:name,
                    price:price,
                    description:description,
                    avilable_quantity:avilable_quantity,
                    minimum_order_quantity:minimum_order_quantity,
                    img:img
                }
                
                // Product Data Goes to DB 
                fetch('http://localhost:5000/product',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(productData)
                })
                .then(res=>res.json())
                .then(insertedata=>{
                    if(insertedata.insertedId){
                        toast.success('Product added Successfully');
                        event.target.reset();
                    }
                })
            }            
        })

    }


    return (
        <div>
            <h2 className='text-2xl font-bold text-green-500 text-center my-4'>Add Product</h2>
            <div class="w-full mx-auto max-w-lg">
                <form onSubmit={handleAddProduct} class="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4" >
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Product Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required name="name" type="text" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
                            Price
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required name='price'  type="number" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                            Description
                        </label>
                        <textarea class="shadow appearance-none border rounded h-52 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='description' required type="text" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="avilable_quantity">
                            Available Quantity
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required name='avilable_quantity' type="number" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="minimum_order_quantity">
                            Minimum Order Quantity
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='minimum_order_quantity' required type="number" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2"  for="img">
                            Product Image <span className='text-red-500 text-xs'> (Please Add Jpeg/Png File)</span>
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required name='img' type="file" onChange={myHandler} />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;