import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import './OurService.css';
const OurService = () => {
    return (
        <div className='my-10'>
            <h3 className='text-primary  text-4xl text-center font-bold uppercase pb-7'>Our Services</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'>
                <div class="service p-9">
                        <FontAwesomeIcon className='text-4xl pb-3' icon={faRocket} />
                        <div>
                            <h4>Express Shipping</h4>
                            <p>We are Delivery anywhere in 3-5 days.</p>
                        </div>
                </div>
                <div class="service p-9">
                        <FontAwesomeIcon className='text-4xl pb-3' icon={faTruck} />
                        <div>
                            <h4>Free Shipping</h4>
                            <p>Free Shipping on all us order above $99.</p>
                        </div>
                </div>
                <div class="service p-9">
                        <FontAwesomeIcon className='text-4xl pb-3' icon={faMoneyBillWave} />
                        <div>
                            <h4>Money Back Guaranteed</h4>
                            <p>We have 30 days money back guarantee.</p>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default OurService;