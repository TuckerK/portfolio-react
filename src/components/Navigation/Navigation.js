import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="container navButton">
        <a>ABOUT</a>
        <a>CONTACT</a>
        <a>PORTFOLIO</a>
      </div>
    );
  }
}

export default Navigation;
