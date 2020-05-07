/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-warning btn-lg m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            // These properties are now passed as props.
            // value={counter.value}
            // id={counter.id}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h5>Counter #{counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
