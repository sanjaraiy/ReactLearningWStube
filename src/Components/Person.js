import React,{Component, createElement} from "react";
import {Man} from "./Man";
import PersonStyle from './Person.module.css';

class Person extends Component{
    constructor(props){
          super(props);
          this.props=props;
          this.state={
            name:"John",
            age:21,
          };

    }
      
    nameChangeHandler(){
      console.log(this.state);
          this.setState({name:"Sanjh",age:25},()=>{ 
            console.log(this.state);
         });
    }

    render(){
      
       console.log(PersonStyle);

      // const style_name={
      //    fontSize:"40px",
      //    color:"red",
      // }

    //********1)->JSX **********/

       return (
          <>
                <h3 className={PersonStyle.heading}>
                   {/* <i>Name:{this.props.name},Age:{this.props.age}</i> */}
                   <i>Dear {this.state.name}, {this.state.age} years, Welcome to WsCubeTech</i>
                   <br/>

                   {/* ***********external import CSS************ */}
                   <button onClick={()=>this.nameChangeHandler()} className={PersonStyle.btn_css}>Click Here</button>
                 
                   {/* ***********inline object_name CSS************ */}
                   {/* <button onClick={()=>this.nameChangeHandler()} style={style_name}>Click Here</button> */}
                   
                   {/* ***********inline CSS************/ }
                   {/* <button onClick={()=>this.nameChangeHandler()} style={{fontSize:"50px"}}>Click Here</button> */}
                </h3>
                
                {/* <Man></Man> */}
           </>
        ) 

    //********2)->React.createElement() **********/
    // return React.createElement("div",{class:"sanjh"},React.createElement("h1",{},React.createElement("i",null,'Name:Sanjh'))) ;


    }
}

export default Person;