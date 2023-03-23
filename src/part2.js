import React from 'react'
import './part2.css'
import pictno1 from './public/pictureNo1.png'
import pictno2 from './public/pictureNo2.png'
export default function Part2() {
  return (
    <div className="Maincontainer">
      <img src={pictno1} className="pictno1Class" alt="img"></img>
      <p className='middleText'>
        With private messaging and calling, you can <br></br>be yourself, speak freely
        and feel close to <br></br>the most important people in your life no matter <br></br>where
        they are.
      </p>
      <img src={pictno2} className="pictno1Class" alt="img"></img>
    </div>
  );
}
