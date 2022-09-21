import React, { Component } from "react";
import "../css/nav.css";
// import logo from '../images/logo.png'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="brand">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="brand-name">
            <a href="/" target="_self" title="webdeer.in">
              <strong>
                Webdeer<b>.in</b>
              </strong>
            </a>
          </div>
        </div>
        <div className="navbar">
          <div className="navbar-style"></div>
          <ul>
            <li>
              <a href="/" target="_self">
                Home
              </a>
            </li>
            <li>
              <a href="/gallery" target="_self">
                Gallery
              </a>
            </li>
            <li>
              <a href="/folio" target="_self">
                Portfolio
              </a>
            </li>
            <li>
              <button>
                <a
                  href="https://www.freelancer.com/u/amitnarayan707"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hire me
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
