import React from "react";
import "./heading.css";

class Heading extends React.Component {
  constructor() {
    super();
    this.state = { link: "Home" };
  }
  render() {
    return (
      <div>
        <nav>
          <h2 style={{ color: "blue", backgroundColor: "silver" }}>
            {this.props.headerTitle}
          </h2>
          <ul className="navigation">
            <li>{this.state.link}</li>
            <li>Page 1</li>
            <li>Page </li>
            <li>About Me</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Heading;
