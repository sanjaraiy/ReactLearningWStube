import React, { Component } from 'react'

class ControllerComponent extends Component {
    
    constructor(props){
        super(props)

        this.state={
            name:"WsCube Tech"
        }
    }

    changeHandle =(event)=>{
        console.log("old:",this.state);
        const name=event.target.value;
        this.setState({name},()=>{
            console.log("new:",this.state);
        });
        
    }

  render() {
    return (
      <div>
          <form>
            <input type='text' name='user_name' value={this.state.name} onChange={this.changeHandle}></input>
          </form>
      </div>
    )
  }
}

export default ControllerComponent