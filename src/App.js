import { createContext, useState } from 'react';
import './App.css';
import CompA from './components/CompA';

const myContext = createContext()
function App() {
  const [data,setData] = useState("This is done through useContext")
  return (
    <div className="App">
      <myContext.Provider value={data}>
        <h1 className='header'>useContext- Avoiding Prop Drilling</h1>
        <CompA myData={data} />
      </myContext.Provider>
    
    </div>
  );
}

export default App;
export {myContext};
