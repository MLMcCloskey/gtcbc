import React, { Component } from "react";

class JSXVariables extends Component{
  constructor(...props){
    super(...props)
  }

  render(){
    return (
      <div className="main-container">
        <div className="container">
          <div className="jumbotron">
            <h1>Hi! My name is {this.props.name}</h1>
            <h2>My name has {this.props.name.length} letters</h2>
            <h2>I think {this.props.thoughts}</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default JSXVariables;
