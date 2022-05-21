import React from 'react';
import Readmore from '../Readmore/Readmore';

const Review = ({ review }) => {
    const { name, img, message, ratings } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="avatar">
                <div class="w-24 rounded-full mx-auto mt-3">
                    <img src={img} />
                </div>
            </div>
            <div className="card-body items-center text-center product">
                <h2 className="card-title">{name}</h2>
                <p><Readmore message={message}></Readmore></p>
                <h3 className=' font-semibold'>Ratings: {ratings}</h3>
            </div>
        </div>
    );
};

export default Review;