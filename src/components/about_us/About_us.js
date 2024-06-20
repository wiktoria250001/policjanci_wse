import React from "react";
import "./About_us.css";
import line1 from "./Line 1.png";
import line2 from "./Line 2.png";
import police_night from "./police_night 1.png";
import police_vv from "./police_vv.png";
import rectangle11 from "./Rectangle 11.png";
import rectangle10 from "./Rectangle 10.png";
import stjohns from "./stjohns";
function About_us({ text }) {
  return (
    <div className="about_us">
      <div className="about_us_left">
        <div className="about_us_title">CONTACT US</div>
        <div className="about_us_subtitle">www.policestjohnshq.com</div>
        <div className="about_us_subtitle1">hello@reallygreatsite.com</div>
        <div className="about_us_subtitle2">+123-456-7890</div>
        <div className="image_container">
          <img className="rectangle_11" src={rectangle11} alt="rectangle_11" />
          <img className="line1" src={line1} alt="line1" />
          <img className="line2" src={line2} alt="line2" />
          <img className="police_vv" src={police_vv} alt="police_vv" />
        </div>
      </div>
      <div className="about_us_right">
        <img className="rectangle10" src={rectangle10} alt="rectangle10" />

        <div className="about_us_title2">ABOUT US</div>
        <div className="stjohns">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </div>
        <div className="stjohns1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </div>
        <div className="about_us_title3">OUR HISTORY</div>
        <div className="stjohns" src={stjohns} alt="stjohns" />
        <img className="police_night" src={police_night} alt="police_night" />
      </div>
    </div>
  );
}

export default About_us;
