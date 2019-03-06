import React, { Component } from "react";
import Display from "../display/Display";

class Dashboard extends Component {
  state = {
    balls: 0,
    strike: 0
  };

  ball = () => {
    const { balls, strike } = this.state;
    if (balls && strike >= 3) {
      this.setState({
        balls: 0,
        strike: 0
      });
    } else {
      this.setState(
        (prevState, props) => {
          return {
            ...this.state,
            balls: (prevState.balls += 1),
            strike: balls % 2 === 0 ? (prevState.balls += 1) : 0
          };
        },
        () => console.log(this.state.strike)
      );
    }
  };

  _hitsHanlder = () => {
    this.setState((prevState, props) => {
      return {
        balls: 0,
        strike: 0
      };
    });
  };

  render() {
    const { balls, strike } = this.state;
    return (
      <div>
        <Display balls={balls} strike={strike} />
        <button data-testid="ball" onClick={this.ball}>
          [ball] to increment
        </button>
        <button data-testid="hit" onClick={this._hitsHanlder}>
          [hit] to 0 both strirke and balls
        </button>
        <button data-testid="foul">[foul] +2 on strike</button>
        <button data-testid="strike">[strike] strike</button>
      </div>
    );
  }
}
export default Dashboard;
