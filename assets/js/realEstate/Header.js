import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "elen"
    };
  }

  render() {
    return (
      <header>
        <div className="logo">
          <a href="#">logo</a>
        </div>
        <nav>
          <a href="#listings">listings</a>
          <a href="#">about us</a>
          <a href="#">log in</a>
          <a href="#" className="register-btn">
            register
          </a>
        </nav>
      </header>
    );
  }
}
// ReactDOM.render(<Header />, app);
