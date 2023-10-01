import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      mydata: {
        name: "",
        location: "",

      },
    };
    //console.log(this.props.name+ "Child Contructor");
  }

  async componentDidMount() {
    //console.log(this.props.name+"Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/abadhe")
    const json = await data.json();
    this.setState({mydata:json,})
    //console.log(json)

  }
  render() {
    //console.log(this.props.name+"Child Render");
    // const { name, location } = this.props;
    const {name, location, avatar_url} = this.state.mydata;
    return (
      <div className="user-container">
       <img src = {avatar_url}></img>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @freshprinceofbombay</h2>
      </div>
    );
  }
}

export default User;
