import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAfrica, faPeopleCarry, faPeoplePulling, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
const BusinessSummery = () => {
    return (
        <div className='my-9'>
            <h3 className='text-primary  text-4xl text-center font-bold uppercase pb-7'>Business Summery </h3>
            <div className='grid grid-cols-3 gap-4 text-center'>
                <div>
                    <p className='text-secondary text-7xl my-2'><FontAwesomeIcon icon={faEarthAfrica} /></p>
                    <p className='text-7xl font-semibold'>14</p>
                    <p className='text-secondary text-3xl'>Countries</p>
                </div>
                <div>
                    <p className='text-secondary text-7xl my-2'><FontAwesomeIcon icon={faPeopleCarry} /></p>
                    <p className='text-7xl font-semibold'>27,600+</p>
                    <p className='text-secondary text-3xl'>Delivery</p>
                </div>
                <div>
                    <p className='text-secondary text-7xl my-2'><FontAwesomeIcon icon={faFaceSmile} /></p>
                    <p className='text-7xl font-semibold'>1365+</p>
                    <p className='text-secondary text-3xl'>Customers</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;