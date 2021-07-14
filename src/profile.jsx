import React from "react";
class Person extends React.Component{
  state = {fullName: "Jhon Doe",bio:'I pilot FPV drones',profession:'Pilot',date:0};
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }
  tick() {
    this.setState({
      date: this.state.date+1
    });
  }
  render() {
    return (
       <div>
<h4>{this.state.fullName}</h4>
<p></p>
<h4>{this.state.bio}</h4>
<p></p>
<h4>{this.state.profession}</h4>
<p></p>
<h4>{this.state.date}</h4>
         <img className="avatar" src='/pic.jpg' alt={this.state.fullName}/>
       </div>
    )
}
}
export default Person
