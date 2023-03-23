import React from 'react'
import './navbar.css'
import downloadimgpicture from './public/download.png'
import WhatsAppPic from "./public/DSxOAUB0raA.png";
export default function Navbar() {
  return (
    <nav className="navbar" dir="rtl">
      <div className="FirstBox">
        <span className="NavBarBtm">
          <div className="DownloadBtmTextbox">
            <img
              src={downloadimgpicture}
              className="DownloadImg"
              alt="img"
            ></img>
            <p>Download</p>
          </div>
        </span>
        <div className="WhatsAppWord">
          <p>WhatsApp Web</p>
          <div className="WhatsAppWordDev"></div>
        </div>
      </div>

      <div className="CenterWordsContainer">
        <div className="CenterWords">
          <p>Blog</p>
          <div className="WhatsAppWordDev"></div>
        </div>
        <div className="CenterWords">
          <p>Help Center</p>
          <div className="WhatsAppWordDev"></div>
        </div>

        <div className="CenterWords">
          <p>Privacy</p>
          <div className="WhatsAppWordDev"></div>
        </div>
        <div className="CenterWords">
          <p className="FeatureMenu">Feature</p>
          <div className="WhatsAppWordDev"></div>
        </div>

      </div>

      <img src={WhatsAppPic} className="WhatsAppPic" alt="img"></img>
    </nav>
  );
}
