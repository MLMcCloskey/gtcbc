import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  handleDecrement = () => {
      this.setState({ score: this.state.score - 1});
  }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="text-center">
        {/* <div className="card-header bg-primary text-white">
          <h3 className="card-title"></h3>
        </div> */}
        <div className="card-body text-center">
          <button className="btn btn-success buttn" style={{width: "50px"}} onClick={this.handleIncrement}>
            +
          </button>
          <span className="text-center"> {this.state.score}</span>
          <button className="btn btn-danger buttn" style={{width: "50px"}} onClick={this.handleDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
