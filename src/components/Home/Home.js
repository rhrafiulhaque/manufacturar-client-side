import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import OurService from '../OurService/OurService';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <BusinessSummery></BusinessSummery>
            <OurService></OurService>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;