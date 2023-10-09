import React,{Component, createElement} from "react";
import {Man} from "./Man";
class Person extends Component{
    constructor(props){
          super(props);
          this.props=props;
    }

    render(){
    //********1)->JSX **********/
       return (
          <>
                <h3>
                   <i>Name:{this.props.name}</i>
                </h3>
                <h3>Age:{this.props.age}</h3>
                <Man></Man>
           </>
        ) 

    //********2)->React.createElement() **********/
    // return React.createElement("div",{class:"sanjh"},React.createElement("h1",{},React.createElement("i",null,'Name:Sanjh'))) ;


    }
}

export default Person;