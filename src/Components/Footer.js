import React from 'react'
import './Footer.css'
import {BsCheckCircle} from 'react-icons/bs'
const cardData=[
    {
        id:1,
        name:"BRANDING PLAN",
        price:1000,
        desc:"Get a subscription with extraordinary benefits and get your special price",
        first:"Logo Design",
        second:"Branding Book",
        third:"Free Revision"
    },
    {
        id:2,
        name:"Week Plan",
        price:1600,
        desc:"Get a subscription with extraordinary benefits and get your special price",
        first:"6 Hours/day",
        second:"Logo Design",
        third:"Revision"
    },
    {
        id:3,
        name:"Month Plan",
        price:6000,
        desc:"Get a subscription with extraordinary benefits and get your special price",
        first:"6 Hours/day",
        second:"Logo Design",
        third:"Unlimited Revision"
    }
]

const Card = ({ data }) => {
    return (
      <div className="card">
        <h1>{data.name}</h1>
        <p> ${data.price}</p>
        <p style={{fontSize:"20px"}}>{data.desc}</p>
        <ul>
          <li>
            <span><BsCheckCircle style={{backgroundColor:"lightBlue",borderRadius:"50%"}}/></span>
            <span>{data.first}</span>
            </li>
          <li>
          <span><BsCheckCircle style={{backgroundColor:"lightBlue",borderRadius:"50%"}}/></span>
            <span>{data.second}</span>
            </li>
          <li>
          <span><BsCheckCircle style={{backgroundColor:"lightBlue",borderRadius:"50%"}}/></span>
            <span>{data.third}</span>

          </li>
        </ul>
        <button className='button'>Started</button>
      </div>
    );
  };
  
  const Footer = () => {
    return (
        <div>
            <h1 className='footHead'>
                GET YOUR BEST PLAN!
            </h1>
            <p style={{width:"60%",marginLeft:"18%",fontSize:"24px",color:"grey"}}>
                Analyzing various subscription options, comparing benefits and costs, to identify
                the optimal plan for maximum value within budget.
            </p>
      <div className="card-container">
        
        {cardData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      <div>
      <footer className="footer">
      <div className="footer-content">
        <p style={{fontSize:"30px"}}>© {new Date().getFullYear()} Proma . All rights reserved.</p>
        
      </div>
    </footer>
      </div>
      </div>
    );
  };
  
  export default Footer;