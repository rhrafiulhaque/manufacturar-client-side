import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-slate-900 text-white py-3'>
            <p><small>All right reserved By TukiTaki <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />{year} </small></p>
        </footer>
    );
};

export default Footer;