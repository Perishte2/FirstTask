import React, {useState} from 'react';



function App() {
  const [counter, setCounter] = useState(1);

  


  

  return (
   
    <div className="wrapper">
      <h1>Counter</h1>
      <h1>{counter}</h1>
       &nbsp;
      <button 
      onClick={() =>setCounter(counter + 1)}>
        Increase</button>
      <button onClick={() => setCounter(counter - 1)} >Decrease</button>
      <button onClick={() => setCounter(counter === 0)}>Reset</button>

     
      </div>
      
  );
}

export default App;
