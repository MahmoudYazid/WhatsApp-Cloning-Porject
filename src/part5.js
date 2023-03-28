import React,{useState} from 'react'
import './part5.css'
import whatsappimg from './public/6422213.png'
export default function Part5() {
    const [title, SetTitle] = useState("Click Next");
    const [Body, SetBody] = useState("or click read me"
    );
    
  return (
    <div className="Maincontainerpart5">


      <div className="Conatiners">
        <img
          src={whatsappimg}
          alt="pic"
          className="whatsappimgpart5Class"
        ></img>
        <p className="TitleCard">{title}</p>
        <p className="BodyCard">{Body}</p>
        <a
          href="https://github.com/MahmoudYazid?tab=repositories"
          style={{ textDecoration: "none" }}
        >
          <div className="readMoreClass">
            <p className="readmoretextclass">Read More</p>
          </div>
        </a>
      </div>

      <div
        className="rightbtm"
        onClick={() => {
          SetTitle("made By Mahmoud Yazid");
          SetBody("Frontend engneer ");
        }}
      >
        <p className="rightbtmText">{">"}</p>
      </div>
      <div
        className="leftbtm"
        onClick={() => {
          SetTitle("Click Next");
          SetBody("or click read me");
        }}
      >
        <p className="rightbtmText">{"<"}</p>
      </div>
    </div>
  );
}
