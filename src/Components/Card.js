import React, { useState, useRef } from "react";
import "./Card.css";
import {AiOutlineArrowRight} from "react-icons/ai"


export default function Card() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const purchaseRef = useRef(null);

//   function handleMouseMove(event) {
//     const card = cardRef.current;
//     const { offsetWidth: width, offsetHeight: height } = card;
//     const { clientX, clientY } = event;
//     const x = clientX - card.offsetLeft - width / 2;
//     const y = clientY - card.offsetTop - height / 2;
//     var mult = 40;
//     setXRotation((y / height) * mult);
//     setYRotation((x / width) * mult);
//   }
  function handleMouseEnter() {
    const img = imgRef.current;
    const title = titleRef.current;
    const purchase = purchaseRef.current;
    const desc = descRef.current
    title.style.transform = "translateZ(150px)";
    img.style.transform = "translateZ(100px) rotateZ(-45deg)";
    purchase.style.transform = "translateZ(75px)";
    desc.style.transform = "translateZ(75px)";
  }
  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const img = imgRef.current;
    const title = titleRef.current;
    const purchase = purchaseRef.current;
    title.style.transform = "translateZ(0px)";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
  }

  return (
    <div className="cardHome">
      <div
        className="card"
        ref={cardRef}
        style={{
          transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
        }}
        //onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src={require("../Images/portfolio1.jpg")}
          alt="Dashboard Design"
          className="sneaaker-img"
        />
        <h1 className="title" ref={titleRef}>
          Dashboard Design
        </h1>
        <p ref={descRef}>
          Through our dashboard design projects,we demonstrate our ability to translate
          complex data sets into easy-to-understand visualizations that drive better 
          decision-making for our clients.
        </p>
        {/* <ul className="sizes-box" ref={sizesboxRef}>
          <li>38</li>
          <li>40</li>
          <li>42</li>
          <li>44</li>
        </ul> */}
        <div className="button-box" ref={purchaseRef}>
          <button className="purchase" >
            <span>Learn More   </span>
            <span>
                <AiOutlineArrowRight/>
            </span>
          </button>
        </div>
      </div>

      <div
        className="card"
        ref={cardRef}
        style={{
          transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
        }}
        //onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imgRef}
          src={require("../Images/portfolio2.png")}
          alt="Website Design"
          className="sneaaker-img"
        />
        <h1 className="title" ref={titleRef}>
          Website Desgin
        </h1>
        <p ref={descRef}>
            With a focus on innovation and creativity, we leverage cutting-edge design
            techniques and technologies to create exceptional user experience that
            stand out from the crowd.
        </p>
        {/* <ul className="sizes-box" ref={sizesboxRef}>
          <li>38</li>
          <li>40</li>
          <li>42</li>
          <li>44</li>
        </ul> */}
        <div className="button-box" ref={purchaseRef}>
          <button className="purchase" >
            <span>Learn More   </span>
            <span>
                <AiOutlineArrowRight/>
            </span>
          </button>
        </div>
      </div>

      
      </div>
  );
}