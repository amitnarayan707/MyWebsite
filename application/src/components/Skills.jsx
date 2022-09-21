import React, { Component } from "react";
import "../css/skills.css";

export default class Skills extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     this.width="70 %"
  //   }
  // }
  render() {
    return (
      <div className="skills">
        <div className="head-name">Skills</div>
        <div className="skill-card">
          <div className="skill-name skill-value">HTML</div>
          <div className="skill-date">
            <span className="skill-value"></span>
          </div>
          <div className="skill-bar">
            <div className="bar">70%</div>
          </div>
          <div className="skill-level">
            <span className="skill-field">Level:</span>
            <span className="skill-value"></span>
          </div>
          <div className="view-cretificate">
            <span className="skill-field">Cretificate:</span>
            <a className="skill-value" href="/">
              Click here
            </a>
          </div>
          <div className="cretificate_by">
            <span className="skill-field">Certificate By:</span>
            <span className="skill-value">Udemy</span>
          </div>
        </div>
      </div>
    );
  }
}
