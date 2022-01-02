import logo from './logo.svg';
import './App.css';

import Todo from './components/todo'; 
import { useState } from 'react';

function App(){
  
 const [count,setCount]=useState(0);
  const addone=(value)=>{
    setCount(count+value);
  }

  const double=()=>{
    setCount(2*count);
  }
  const reset=()=>{
    setCount(0);
  }

  return (
    <div>
    <h1>Counter : {count}</h1>
    <button onClick={()=>addone(1)}>Increment</button>
    <button onClick={()=>addone(-1)}>Decrement</button>
    <button onClick={()=>double()}>Double it</button>
    <button onClick={()=>reset()}>Reset 0</button>
    </div>
  );
}

// function App() {
//   var arr=['i','am','working'];

  

//   const [count,setCount]=useState(0);
  
//   const addone=(value)=>{
//     setCount(count+value);
//   };

//   return (
//     <div className="App">
//       {/* 
//         arr.map((e)=>(<Todo num={e}><h1>Child h1</h1></Todo>))
//        */}
//        {/* <Operate />
//        <Manufacture /> */}
        
//        <h1>counter:{count}</h1>
//        <button onClick={addone(1)}>ADD ONE</button>
//     </div>
//   );
// }
// function Operate(){

// return   (<div>  <h1>Mobile Operating System</h1>
//                  <ul>
//                    <li>Android</li>
//                    <li>Blackberry</li>
//                    <li>iPhone</li>
//                    <li>WindowsPhone</li>
//                  </ul>
          
// </div>)
// }
// function Manufacture(){
  
// return (
//   <div className='center'>
//     <h1>Mobile Manufactures</h1>
//     <ul>
//       <li>Samsung</li>
//       <li>HTC</li>
//       <li>Micromax</li>
//       <li>Apple</li>
//     </ul>
//   </div>
// )
// }

export default App;
