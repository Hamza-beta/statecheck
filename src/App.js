import React from 'react';
import './App.css';
import './profile'
import Person from './profile';

class App extends React.Component{
state={clickshow:false}
buttonshow=()=>{
  this.setState({clickshow:!this.state.clickshow})
}

  render(){
    return(
    <div className="App">
    <button onClick={this.buttonshow}>Show</button>
    {this.state.clickshow && <Person></Person>} 
    </div>
    )
  }
}
export default App;
