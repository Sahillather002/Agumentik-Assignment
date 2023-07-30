import React from 'react'
import { useRef } from 'react';
import './Member.css'
import people from '../Images/people.png'
import circle from '../Images/circle.png'
import second from '../Images/second.png'
import third from '../Images/third.png'
import fourth from '../Images/fourth.png'
import fifth from '../Images/fifth.png'
import sixth from '../Images/sixth.png'

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
                <div className='blackCard'>
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

                <div className='greenCard'>
                <img src={second} style={{width:"100px",height:"100px",marginTop:"4px"}}/>
                    <div>
                        <h1>SPECIAL PRICES</h1>
                    </div>
                    <div style={{width:"70%",marginLeft:"14%",fontSize:"20px"}}>
                        <p>
                            Discounted pricing or unique rates offerred for certain design services.                
                        </p>
                    </div>
                </div>

                <div className='blackCard'>
                <img src={third} style={{width:"100px",height:"100px",marginTop:"4px"}}/>
                    <div>
                        <h1>PRIVATE DESIGNER</h1>
                    </div>
                    <div style={{width:"70%",marginLeft:"14%",fontSize:"20px"}}>
                        <p>
                            Freelance or contract designer who works directly with clients.
                        </p>
                    </div>
                </div>

                <div className='greenCard'>
                <img src={fourth} style={{width:"100px",height:"100px",marginTop:"4px"}}/>
                    <div>
                        <h1>FREE FEEDBACK</h1>
                    </div>
                    <div style={{width:"70%",marginLeft:"14%",fontSize:"20px"}}>
                        <p>
                        Evaluation or critique of design work provided at no cost.
                        </p>
                    </div>
                </div>

                <div className='blackCard'>
                <img src={fifth} style={{width:"100px",height:"100px",marginTop:"4px",color:"white"}}/>
                    <div>
                        <h1>NO FRUSTATION</h1>
                    </div>
                    <div style={{width:"70%",marginLeft:"14%",fontSize:"20px"}}>
                        <p>
                        Desing that is intuitive and easy to use, minimizing user frutstration and confusion.
                        </p>
                    </div>
                </div>

                <div className='greenCard'>
                <img src={sixth} style={{width:"100px",height:"100px",marginTop:"4px"}}/>
                    <div>
                        <h1>PRIVATE DEVELOPER</h1>
                    </div>
                    <div style={{width:"70%",marginLeft:"14%",fontSize:"20px"}}>
                        <p>
                            Freelance or contract developer who works directly with clients.
                        </p>
                    </div>
                </div>
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