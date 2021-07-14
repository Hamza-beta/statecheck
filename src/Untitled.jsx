
APP

import React from "react";
import Counter from "./Counter";
import "./styles.css";

class App extends React.Component {
  state = {
    show: false
  };

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
    console.log(this.state.show);
  };

  render() {
    return (
      <div className="App">
        <h1> Workshop state </h1>
        <button onClick={this.toggle}> show </button>
        {this.state.show && <Counter />}
      </div>
    );
  }
}

export default App;