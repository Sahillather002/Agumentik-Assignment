import React from 'react'
import { useRef } from 'react';
import './Member.css'
const Member = () => {
    const descRef=useRef(null);
  return (
    <div class='member'>
        <button className='navButtons'>
            WORLD-CLASS CREATIVES
        </button>
        <h1>
            OUR MEMBERSHIP BENEFITS
        </h1>
        <p ref={descRef}>
            A membership program is a marketing strategy used by companies to reward their
            customers for their loyalty and repeat business.
        </p>
    </div>
  )
}

export default Member