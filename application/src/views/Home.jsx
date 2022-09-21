import React, { Component } from "react";
import HeadeStyle from "../components/HeaderStyle";
import "../css/home.css";

//components
import Qualification from "../components/Qualification.jsx"
import ImgCase from "../components/ImgCase.jsx"
import Skills from "../components/Skills.jsx"

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home-container">
        <div className="header">
          <HeadeStyle />
          <div className="profile-img">
            <div className="profile-arc1"></div>
            <img src="/pr-img.jpg" className="pro-img" alt="" />
            <div className="profile-arc2"></div>
          </div>
          <div className="profile-detail">
            <div className="profile-name">
              Hi,
              <br />
              I'm Amit a full stack developer
            </div>
                    {/*<div className="profile-about">
              I am Amit Narayan and studing BCA from Arcade Business College,
              Patna, Bihar, India. My profession is Full-Stack Developer. I
              started my journey in early 2020 to become a Full-Stack Developer.
              And today, I am an intermediate-level developer.
            </div>*/}
          </div>
        </div>
        <div className="main-container">
          <Qualification />
          <Skills />
          {/* <ImgCase /> */}
        </div>
      </div>
    );
  }
}
