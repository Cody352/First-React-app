/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    // We make a copy of the counters array.
    const counters = [...this.state.counters];
    // We check the index of each counter.
    const index = counters.indexOf(counter);
    // We match the indexes of each counter.
    counters[index] = { ...counter };
    // We increment the value of the copied array.
    counters[index].value++;
    //   We set the state of the newly copied array.
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (counterId) => {
    // This creates a new array.
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </nav>
        <div className="main">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          ></Counters>
        </div>
      </div>
    );
  }
}

// function App() {

export default App;
