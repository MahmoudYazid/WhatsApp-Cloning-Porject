import React from 'react'
import './part4.css'
import brownpic from './public/brownpic.png'
export default function Part4() {
  return (
    <div className="MaincontainerPart4">
      <p className="TextContainerpart4">
        <p style={{ color: "white", display: "inline" }}>Speak</p>
        <br></br>
        <p style={{ color: "#25d366", display: "inline" }}>freely</p>
      </p>
      <img src={brownpic} alt="pic" className="brownpicClass"></img>
      <p className="SubTextpart4">
        With end-to-end encryption, your personal messages and  calls
        are secured. Only you and the person you're talking  to can
        read or listen to them, and nobody in between, not even
        WhatsApp.
      </p>
      <div className="LearnMoreContainerPart4">
        <p>Learn More {">"}</p>
        <div className="LineClasspart4"></div>
      </div>
    </div>
  );
}
