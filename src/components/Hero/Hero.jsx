import React from "react";
import "./Hero.css";
//import logo from "../../assets/pug.png"

const Hero = props =>
  <div
    className="hero text-center"
    //style={{ backgroundImage: `url(${logo})`}}
    //style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
  </div>;

export default Hero;
