import React from "react";
// import '../styles/Footer.scss';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  // AiOutlineArrowUp,
  AiOutlineTwitter, // Twitter icon from Ant Design
} from "react-icons/ai";

const Footer = () => {
  return (
    
      <div className="Footer">
        <div className="leftcontainer">
          <img
            src={
              "https://i.ibb.co/cXJsBP1B/153.jpg"
            }
            alt="Founder"
          />
        </div>

        <div className="middleContainer">
          <h2>EsMyBiz</h2>
          <p>
            Today is difficult, tomorrow is much more difficult, but the day
            after tomorrow is beautiful. Most people die tomorrow evening.
          </p>
        </div>

        <div className="rightSide">
          <a
            href="https://www.linkedin.com/in/sushil-kumar-aa586723b/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/er_sushil_chaurasia/?hl=en"
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Sushil-Raut" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://x.com/SushilRautk" target={"blank"}>
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    
  );
};

export default Footer;
