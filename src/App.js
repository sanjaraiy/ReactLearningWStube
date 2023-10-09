import './App.css';
import P from './Components/Person';
import {Man} from './Components/Man';
function App() {
  return (
  <>
      <div className='Sanjh'>
           <h1>Sanjh is learning React</h1> 
      </div>
      <P name="JOHN" age="20"></P>
      <P name="RAHUL"></P>
      <P name="Sanjh" age="24"></P>
      <Man></Man>
  </>
  );
}

export default App;
