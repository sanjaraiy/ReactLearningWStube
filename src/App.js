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

class App extends Component{
    constructor(props){
       super(props);
       this.state={
         demo:"Testing",
       };
       this.buttonClickHandler=this.buttonClickHandler.bind(this);
    }
   
  buttonClickHandler(){  //here 'this' keyword rebinds so,we can't access 'this.props'
    console.log(this.state);
  };

  // buttonClickHandler=()=>{  //here 'this' keyword doesn't rebind so,we can access 'this.props'
  //   console.log(this.props);
  // };

  render(){
    return (
      //  <div className='App'>
      //      <P name="WsCube Tech" age="11"></P>
      //      <button type="button" onClick={this.buttonClickHandler}>Click Me</button>
      //  </div>

      //**********Event binding*********/
      // 1) 
      //  <div className='App'>
      //      <P name="WsCube Tech" age="11"></P>
      //      <button type="button" onClick={()=>this.buttonClickHandler()}>Click Me</button>
      //  </div>
      // 2)********inline Bind********
      //  <div className='App'>
      //      <P name="WsCube Tech" age="11"></P>
      //      <button type="button" onClick={this.buttonClickHandler.bind(this)}>Click Me</button>
      //  </div>
      // 2)
       <div className='App'>
           <P name="WsCube Tech" age="11"></P>
           <button type="button" onClick={this.buttonClickHandler} className='btn_css'>Click Me</button>
       </div>
    );
  }

}

export default App;
