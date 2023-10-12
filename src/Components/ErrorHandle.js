import React,{Component} from "react";
import './ErrorHandle.css';

class ErrorHandle extends Component{
     constructor(props){
        super(props);
        this.props=props;
        this.state={
            name:"Sanjay",
            age:26,
        }
     }

      render(){
        return (
            <div className="container">
                <label>Name:</label> 
                <i>{this.props.name}</i>
                <br></br>
                <label>Age:</label> 
                <i>{this.props.age}</i>
            </div>
        );
     }
}

export default ErrorHandle;