import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Purchase.css';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() => {
        fetch(`https://dry-journey-86237.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleProduct(data);
            });
    }, [id])
    const handlePurchase = event => {
        event.preventDefault();
        const id = singleProduct._id;
        const productname = singleProduct.name;
        const price = singleProduct.price;
        const quantity = parseInt(event.target.quantity.value);
        const username = user.displayName;
        const email = user.email;
        const minqty = parseInt(singleProduct.minimum_order_quantity);
        const phone = event.target.mobile.value;
        const address = event.target.address.value;
        const avilableqty = singleProduct.avilable_quantity;
        if (minqty <= quantity && quantity <= avilableqty) {
            event.target.reset();
            const order ={
                productId:id,
                productname:productname,
                price:price,
                quantity:quantity,
                username:username,
                email:email,
                phone:phone,
                address:address
            }
            fetch('https://dry-journey-86237.herokuapp.com/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.success){
                    toast.success(`Your Order is submitted and Waiting for your Payment`);
                }else{
                    toast.error('There Have an error');
                }
            });
        }
        else if (quantity > avilableqty) {
            toast.error(`We have not enough Products`);
        }
        else {
            toast.error(`Please Order minimum ${minqty} products`);
        }

    }
    return (
        <div>
            <h3 className='text-primary  text-4xl text-center font-bold uppercase pb-7'>Purchase Product</h3>

            <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <div class="avatar">
                    <div class="w-24 rounded-full mx-auto ">
                        <img className='' src={singleProduct.img} />
                    </div>
                </div>
                <div class="form-control">
                    <label class="input-group">
                        <span>Product Name</span>
                        <input type="text" name='productname' disabled value={singleProduct.name} class="input input-bordered w-max product-child " />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input-group">
                        <span>Price</span>
                        <input type="number" name='price' disabled value={singleProduct.price} class="input input-bordered w-max " />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input-group">
                        <span className='min'>Available Quantity </span>
                        <input type="number" name='minimumquantity' disabled value={singleProduct.avilable_quantity} class="input input-bordered w-max max-w-xs" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input-group">
                        <span className='min'>Minimum Order Quantity </span>
                        <input type="number" name='minimumquantity' disabled value={singleProduct.minimum_order_quantity} class="input input-bordered w-max max-w-xs" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input-group">
                        <span>Name </span>
                        <input type="text" value={user.displayName} disabled name='name' class="input input-bordered w-max max-w-xs" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input-group">
                        <span>Email </span>
                        <input type="text" value={user.email} disabled name='email' class="input input-bordered w-max max-w-xs" />
                    </label>
                </div>

                <div class="form-control">
                    <label class="input-group">
                        <span>Quantity </span>
                        <input type="number" name='quantity' class="input input-bordered w-max max-w-xs" />
                    </label>
                </div>

                <div class="form-control">
                    <label class="input-group">
                        <span>Address </span>
                        <input type="text" name='address' class="input input-bordered w-max max-w-xs" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input-group">
                        <span>Mobile </span>
                        <input type="number" name='mobile' class="input input-bordered w-max max-w-xs" />
                    </label>
                </div>
                <div class="form-control">
                    <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                </div>

            </form>
        </div>
    );
};

export default Purchase;