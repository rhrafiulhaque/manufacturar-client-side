import React, { useState } from 'react';
import './Readmore.css';

const Readmore = ({message}) => {
    const [isReadMore, setReadMore] = useState(false);
    const toggleBtn =()=>{
        setReadMore(!isReadMore)
    }

    return (
        <div>
           <p>
           {isReadMore ? message : message.slice(0,100)}
            <button onClick={toggleBtn} className="read-btn"> {isReadMore?'Read Less':'.. Read More'}</button>
           </p>
        </div>
    );
};

export default Readmore;