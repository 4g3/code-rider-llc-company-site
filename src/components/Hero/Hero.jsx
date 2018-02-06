import React from 'react';
import './Hero.css';
// import logo from "../../assets/pug.png"

const Hero = props =>
  (<div
    className="hero text-center"
   >
    {props.children}
   </div>
  );
export default Hero;
