import React,{useState} from 'react';

function Day3() {
const [count,setCount] = useState(0)

  return (
    <div className = 'container'>
      <div className = 'card'>
        <div className = 'card-body'>
          <h1>Counter App</h1>
          <div className = 'main'>
            <h2 className = 'count'>{count}</h2>
            <button className = 'increment' onClick={()=>setCount(count+1)}>Increment</button>
            <button className = 'decrement' onClick={()=>setCount(count-1)} disabled = {count===0}>Decrement</button>
            <button className = 'reset' onClick={()=>setCount(0)} disabled = {count===0}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day3;