import React, { Component } from "react";
import "../css/qualification.css";
export default class Qualification extends Component {
  render() {
    return (
      <div className="qualification">
        <div className="head-name">Qualification</div>
        <div className="card">
          <div className="card-date">August 2020 - ongoing</div>
          <div className="card-location">Patna, Bihar, India</div>
          <div className="card-degree">Bachelor of Computer Application</div>
          <div className="card-college">Arcade Business College</div>
          <div className="card-affilated">Patliputra University</div>
        </div>
        <hr />
        <div className="card">
          <div className="card-date">September 2018 - February 2020</div>
          <div className="card-location">Gaya, Bihar, India</div>
          <div className="card-degree">Intermediate of Science(PCM)</div>
          <div className="card-college">Mirza Ghalib College</div>
          <div className="card-affilated">Bihar School Examination Board</div>
        </div>
        <hr />
        <div className="card">
          <div className="card-date">May 2017 - February 2018</div>
          <div className="card-location">Gaya, Bihar, India</div>
          <div className="card-degree">Matriculation</div>
          <div className="card-college">Manav Bharti National School</div>
          <div className="card-affilated">
            Central Board of Secondary Education
          </div>
        </div>
      </div>
    );
  }
}
