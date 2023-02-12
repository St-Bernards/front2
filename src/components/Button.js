import React, { Component } from "react";
import "./styles/Button.css";

class Button extends Component {
  render() {
    return (
      <button className="Button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
