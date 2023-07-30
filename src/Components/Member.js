import React from 'react'
import { useRef } from 'react';
import './Member.css'
import people from '../Images/people.png'
import circle from '../Images/circle.jpg'

const cardData = [
    {
        id: 1,
        title: 'Card 1',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 2,
        title: 'Card 2',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 3,
        title: 'Card 3',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 4,
        title: 'Card 4',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 5,
        title: 'Card 5',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 6,
        title: 'Card 6',
        image: 'https://via.placeholder.com/300',
    },
];

const Member = () => {
    const descRef = useRef(null);
    return (
        <div class='member'>
            <button className='navButtons'>
                WORLD-CLASS CREATIVES
            </button>
            <h1 className='memberHeading'>
                OUR MEMBERSHIP BENEFITS
            </h1>
            <p className="memberText" ref={descRef}>
                A membership program is a marketing strategy used by companies to reward their
                customers for their loyalty and repeat business.
            </p>

            {/* <div className="card-container">
                {cardData.map((card) => (
                    <div className="card" key={card.id}>
                        <img src={card.image} alt={card.title} />
                        <div className="card-content">
                            <h3>{card.title}</h3>
                        </div>
                    </div>
                ))}
            </div> */}

            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"90%",margin:"0 5%"}}>
                <div style={{border:"1px solid white",backgroundColor:"black",color:"white"}}>
                    <img src={circle} style={{width:"100px",height:"100px",marginTop:"4px"}}/>
                    <div>
                        <h1>SPEEDY TURNOVERS</h1>
                    </div>
                    <div style={{width:"70%",marginLeft:"14%",fontSize:"20px"}}>
                        <p>
                            Quick delivery of services to meet tight deadlines or short notice requirements.
                        </p>
                    </div>
                </div>

                <div style={{border:"1px solid white",backgroundColor:"lightgreen",color:"white"}}  >Secnd</div>
                <div style={{border:"1px solid white",backgroundColor:"black",color:"white"}}>Third</div>
                <div style={{border:"1px solid white",backgroundColor:"lightgreen",color:"white"}}>Fourrt</div>
                <div style={{border:"1px solid white",backgroundColor:"black",color:"white"}}>fIfth</div>
                <div style={{border:"1px solid white",backgroundColor:"lightgreen",color:"white"}}>Sixh</div>
            </div>

            <div>
            <button className='navButtons'>
                OUR-PARTNERS
            </button>
            <h1 className='memberHeading'>
                PARTNER WITH WORLD
            </h1>
            <h1 className='memberHeading'>
                CLASS CREATIVE
            </h1>
            <p className='memberText'>
                A creative agency or professional who works closely with a 
                client to provide design and branding services.
            </p>
            <img src={people}/>
            </div>

        </div>
    )
}

export default Member