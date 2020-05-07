/* eslint-disable no-undef */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  // styles = {
  //   fontSize: 16,
  //   fontWeight: "bold",
  // };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   We can replace our constructor by changing our handleIncrement to an arrow function.
  // handleIncrement = (product) => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-md"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-md m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "success" : "warning";
    return classes;
  }

  formatCount() {
    var { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
    // Alternatively we could write this as:
    // return this.state.count === 0 ? 'Zero': this.state.count
  }
}

export default Counter;
