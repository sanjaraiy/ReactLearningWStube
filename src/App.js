import './App.css';
import P from './Components/Person';
import {Man} from './Components/Man';
import Demo from './Components/Demo';
import ErrorHandle from './Components/ErrorHandle';
import React,{ Component } from 'react';
import axios from 'axios';


// function App() {

//   const buttonClickHandler=()=>{
//      alert("Hello")
     
//   };

//   return (
//   <>
//       {/* <div className='heading1'>
//            <i>Dear User Sanjh, x years, is learning React</i> 
//       </div> */}
//       {/* <Demo number="1"></Demo> */}
//         {/* <P name="JOHN" age="20"></P> */}
//       {/* <Demo number="2"></Demo><P name="RAHUL"></P>
//       <Demo number="3"></Demo><P name="Sanjh" age="24"></P>
//       <Man></Man>
//        */}

//        <ErrorHandle name="Deep" age="21"></ErrorHandle>
//        <button type="button" onClick={buttonClickHandler}>Click</button>

//   </> 
//   );
// }

// export default App;


// class App extends Component{
//     constructor(props){
//        super(props);
//        this.state={
//          demo:"Testing",
//        };
//        this.buttonClickHandler=this.buttonClickHandler.bind(this);
//     }
   
//   buttonClickHandler(){  //here 'this' keyword rebinds so,we can't access 'this.props'
//     console.log(this.state);
//   };

//   // buttonClickHandler=()=>{  //here 'this' keyword doesn't rebind so,we can access 'this.props'
//   //   console.log(this.props);
//   // };

//   render(){
//     return (
//       //  <div className='App'>
//       //      <P name="WsCube Tech" age="11"></P>
//       //      <button type="button" onClick={this.buttonClickHandler}>Click Me</button>
//       //  </div>

//       //**********Event binding*********/
//       // 1) 
//       //  <div className='App'>
//       //      <P name="WsCube Tech" age="11"></P>
//       //      <button type="button" onClick={()=>this.buttonClickHandler()}>Click Me</button>
//       //  </div>
//       // 2)********inline Bind********
//       //  <div className='App'>
//       //      <P name="WsCube Tech" age="11"></P>
//       //      <button type="button" onClick={this.buttonClickHandler.bind(this)}>Click Me</button>
//       //  </div>
//       // 2)
//        <div className='App'>
//            <P name="WsCube Tech" age="11"></P>
//            <button type="button" onClick={this.buttonClickHandler} className='btn_css'>Click Me</button>
//        </div>
//     );
//   }

// }


class App extends Component{
    constructor(props){
       super(props);

       this.state={
        persons:[{ name:"WsCube Tech", id:0, age:11},{name:"Sanjay", id:1,  age:21},{name:"Deep", id:2, age:20},],
        isShow:true,
        };

       this.toggleHandler=this.toggleHandler.bind(this);
       
       
    }
    
    toggleHandler() {
     this.setState({isShow:!this.state.isShow});
     
    }
   
 render(){


   let per;
  //  per=this.state.persons.map((p,index)=>{
  //   //  return <P key={p.id}  name={p.name} age={p.age}></P>
  //    return <P key={index}  name={p.name} age={p.age}></P>
  //   });
      


     {/************* Using if-else condition**************/}
      if(this.state.isShow){
        per=this.state.persons.map((p,index)=>{
             return <P key={index}  name={p.name} age={p.age}></P>
            });
      }else{
         per="";
      }
    // console.log(per);

    console.log(this.state.isShow);


    return (
       <div className='App'>
       <button onClick={this.toggleHandler}>Click Me</button>
        {per}
       {/************* Using ternary condition**************/}
       {/* {this.state.isShow===true? per:""} */}
 
            {/* <P name={this.state.persons[0].name} age={this.state.persons[0].age}></P> */}
        </div>
    );
  }

}

export default App;
