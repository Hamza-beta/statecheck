import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    
  }

  increment = (pas) => {
    this.setState({
      count: this.state.count + pas
    });
  };

  decrement = () => {
    this.state.count > 0 &&
      this.setState({
        count: this.state.count - 1
      });
  };
  componentDidMount() {
  
    document.title = this.state.count;
  }

  componentDidUpdate() {
    console.log("3.didupdate");
    document.title = this.state.count;
  }
  componentWillUnmount() {
    console.log("4.component will unmout");
    document.title = "react app";
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={() => this.increment(1)}> +</button>
        <span> {this.state.count} </span>
        <button onClick={this.decrement}>- </button>
      </div>
    );
  }
}
export default Counter;
