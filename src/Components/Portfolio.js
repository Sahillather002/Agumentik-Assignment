import React from 'react'
import './Portfolio.css'
import Card from './Card'
const Portfolio = () => {
    return (
        <div className='portfolio'>
            <button className='navButton'>
                OUR PORTFOLIO
            </button>
            <h1>
                PORTFOLIO OF OUR WORK
                IN THE PAST YEAR
            </h1>
            <div style={{marginTop:"5%"}}>
            <Card/>
            </div>
        </div>
    )
}

export default Portfolio