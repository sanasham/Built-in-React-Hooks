import React from 'react';
import useCounter from './useCounter.js';


const CounterOne: React.FC = () => {
  const [count,increment, decrement, reset]=useCounter();

  console.log(increment, decrement);
  return (
    <div>
      <label htmlFor="">Count: {count}</label>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
