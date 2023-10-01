import User from "./User";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Contructor");
  }
  componentDidMount() {
    //console.log("Parent ComponentDidMount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h3>Welcome to my app's about page</h3>
        <User/>
      </div>
    );
  }
}
export default About;
