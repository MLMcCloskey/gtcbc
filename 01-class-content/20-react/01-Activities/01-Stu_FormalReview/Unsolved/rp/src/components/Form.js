import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    Username: "",
    Password: ""
  };

  handleInputChange = event => {
    const { target: {name, value}} = event;

    this.setState({
      [name]: value
    });
  }

  captureUsername = (event) => {
    event.preventDefault();
    alert(`username is ${this.state.Username} and password is ${this.state.Password}`)
    // const { target: {name, value}} = event;

    // this.setState( {username : event.target.value})
    // this.setState(  )
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.Username}</p>
        <p>Password: {this.state.Password}</p>
        <input
          type="text"
          placeholder="Username"
          // value = {this.state.username}
          onChange = {this.handleInputChange}
          name="Username"
        />
        <input
          type="password"
          placeholder="Password"
          // value = {this.state.password}
          onChange = {this.handleInputChange}
          name="Password"
        />
        <button onClick = {this.captureUsername}>Submit</button>
      </form>
    );
  }
}

export default Form;
