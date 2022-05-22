import React from 'react';
import success from '../../images/success.jpg';

const WhyChoose = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={success} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-primary">Why Choose <br /> Our Services?</h1>
                    <p class="py-6 pr-40">At Tukitaki Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company. Tukitaki is an integrated design-build firm offering engineering and  services to domestic and international customers throughout the U.S. Unique to Tukitaki is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;