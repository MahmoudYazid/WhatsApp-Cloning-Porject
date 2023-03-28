import React from 'react'
import fathermotherdoughter from './public/fatherDoughtermother.png'
import './part3.css'
export default function Part3() {
  return (
    <div className="Maincontainer">
      <img
        src={fathermotherdoughter}
        alt="pic"
        className="fathermotherdoughterClass"
      ></img>
      <p class="MainTitle">
        Never miss a <br></br>moment with voice<br></br> and video <br></br>
        calls
      </p>
      <p class="Subtitle">
        From a group call to classmates to a quick call<br></br> with mom,feel
        like you’re in the same room<br></br> with voice and video calls.
      </p>
      <div className="TextContainer">
        <p>Learn More {">"}</p>
        <div className="LineClass"></div>
      </div>
    </div>
  );
}
