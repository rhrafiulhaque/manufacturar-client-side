import React from 'react';
import myphoto from '../../images/myphoto.jpg'

const MyPortfolio = () => {
    return (
        <div className='mx-auto text-center my-5'>
            <img className='mx-auto' style={{width:'190px'}} src={myphoto} alt="" />
            <h1 className=' text-5xl'>RH Rafiul Haque</h1>
            <h4 style={{fontSize:'20px'}}>rh.rafiul.haque@gmail.com</h4>
            <h4 style={{fontSize:'14px'}}>Studied at Naogaon Polytechnic Institute</h4>
            <p className='my-3'> I have skill of HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, Node.js, Express.js <br /> And still now i am learning to get my skill sharp</p>
            <p className=' font-semibold text-3xl mb-4'>My Projects are:</p>
            <ul>
            <li><a className=' text-purple-600' href="https://doctor-moshai.web.app/">Doctor Moshai</a></li> 
            <li><a className=' text-purple-600' href="https://electromart-840ce.web.app/">ELectro Mart</a></li> 
            <li><a className=' text-purple-600' href="https://tukitaki-44d7d.web.app/">TukiTaki</a></li> 
            </ul>
        </div>
    );
};

export default MyPortfolio;