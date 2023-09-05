import { useState } from "react";

const initialCount = 0;
const useCounter = () => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count +1)
  const decrement = () => setCount(count -1)
  const reset = () => setCount(initialCount)
  return [count,increment, decrement, reset]
}

export default useCounter;
