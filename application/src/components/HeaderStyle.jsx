import React from "react";
import '../css/HeaderStyle.css'

let color = ["#e8f9fd", "#79dae8", "#0aa1dd", "#2155cd"];
let bubbles = () => {
  let headerStyle = document.getElementById("header-style");
  let bubble = document.createElement("span");
  let size = Math.random() * 100;
  bubble.style.width = 10 + size + "px";
  bubble.style.height = 10 + size + "px";
  bubble.style.top = Math.random() * 600 + "px";
  bubble.style.left = Math.random() * 1800+ "px";
  bubble.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
  headerStyle.appendChild(bubble);
  setTimeout(() => {
    bubble.remove()
  },5000)
};

setInterval(bubbles,20);
export default function HeadeStyle() {
  return <div className="header-style" id="header-style"></div>;
}
