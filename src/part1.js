import React from 'react'
import motherpic from './public/mother.png'
import './part1.css'
import downloadimgpicture from "./public/download.png";
import Good_morning_pic from './public/goodmornignmom.png'
import steaker_pic from './public/steaker.png'
import Record from './public/record.png'
import chatBetween from './public/chatBetween.png'
export default function Part1() {
  return (
    <div className="Maincontainer">
      <img src={motherpic} alt="mother" className="motherPicClass"></img>
      <p className="MotherPicText">
        Message <br></br>privately
      </p>
      <p className="MotherSubtitle">
        Simple, reliable, private messaging and <br></br>calling for free*,
        available all over the<br></br> world.
      </p>
      <img
        src={Good_morning_pic}
        className="Good_morning_pic_class"
        alt="img"
      ></img>
      <img src={steaker_pic} className="steaker_pic_class" alt="img"></img>
      <img src={Record} className="Record_pic_class" alt="img"></img>

      <img src={chatBetween} className="chatBetween_pic_class" alt="img"></img>
      <span className="DownloadBtm">
        <div className="DownloadBtmTextboxMiddleOfPage">
          <img
            src={downloadimgpicture}
            className="imgOfMidlleBtm"
            alt="img"
          ></img>
          <p>Download</p>
        </div>
      </span>
    </div>
  );
}
