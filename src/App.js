import './App.css';
import P from './Components/Person';
import {Man} from './Components/Man';
import Demo from './Components/Demo';
import ErrorHandle from './Components/ErrorHandle';
function App() {

  const buttonClickHandler=()=>{
     alert("Hello")
     
  };

  return (
  <>
      {/* <div className='heading1'>
           <i>Dear User Sanjh, x years, is learning React</i> 
      </div> */}
      {/* <Demo number="1"></Demo> */}
        {/* <P name="JOHN" age="20"></P> */}
      {/* <Demo number="2"></Demo><P name="RAHUL"></P>
      <Demo number="3"></Demo><P name="Sanjh" age="24"></P>
      <Man></Man>
       */}

       <ErrorHandle name="Deep" age="21"></ErrorHandle>
       <button type="button" onClick={buttonClickHandler}>Click</button>

  </> 
  );
}

export default App;
