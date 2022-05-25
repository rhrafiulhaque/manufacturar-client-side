import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReview] = useState([]);
    const [loadReview, setLoadReview] = useState(false);
    useEffect(() => {
        fetch('https://dry-journey-86237.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data));
    })
    const showMore = () => {
        setLoadReview(!loadReview);
    }
    return (
        <div className='container text-center mt-7 pt-7'>
            <h3 className='text-primary  text-4xl text-center font-bold uppercase pb-7'>Customer Reviews </h3>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    loadReview ? reviews.map(review => <Review key={review._id} review={review}></Review>) :
                        reviews.slice(0, 3).map(review => <Review key={review._id} review={review}></Review>)
                }

            </div>
            <button className='btn-show-more  mt-3' onClick={showMore}>{loadReview ? 'Show Less' : 'Show More'}</button>
        </div>
    );
};

export default Reviews;