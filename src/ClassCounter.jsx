import React, { Component } from 'react'

class ClassCounter extends Component {
     constructor(props){
          super(props);

          this.state={
            count:0
          }
          
     }
     increaseHandler=(e)=>{
      e.preventDefault();
      this.setState({count:this.state.count +1}) 
        
     }

     decreaseHandler=(e)=>{
      e.preventDefault();
       this.setState ({count:this.state.count -1})
     }
  render() {
    return (
      <div>
        <h1>Class Counter: {this.state.count}</h1>
        <button style={{backgroundColor:'green', color:'white'}} onClick={this.increaseHandler}>increase</button>
        <button style={{backgroundColor:'red', color:'white'}} onClick={this.decreaseHandler}>Decrease</button>
      </div>
    )
  }
}

export default ClassCounter;

