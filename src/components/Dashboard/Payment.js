import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3K7gFnwSLm2DyZfkOAeZy9NtoCowWjHSyO7hKI1Xy8P9diOX2jkPsue8wuW4FO5t9WvaPHsbzSGlGHONm9HM5Y00hYbaU1DU');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET'

    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 mx-auto max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p class="text-success font-bold">Hello, {order.username}</p>
                    <h2 class="card-title">Please Pay for {order.productname}</h2>
                    <p>Your Quatity is : <span className='text-orange-700'>{order.quantity}</span></p>
                    <p>Please pay: ${order.price*order.quantity}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 mx-auto w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;