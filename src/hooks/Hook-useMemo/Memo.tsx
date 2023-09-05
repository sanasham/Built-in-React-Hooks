import React,{useState} from 'react';
import Header from '../../Header';
import Button from '../../Button';

const Memo = () => {
    const [count, setCount] = useState(0)
    const [list, setList] = useState(["item"])

    const addItem = () => {
        setList([...list, "item"])
    }
    const increment = () => {
      setCount(count + 1)
    }
    const updateCount = () => {
      const value: number = 0;
      for (let i = 0; i < 10000000; i++) {
        value + i;
      }
      return count + value;
    }
  return (
    <div>
      <Header label='Use Memo Hook' />
      <Button label='Add Item' onClick={addItem} />
      <p>List : </p>
      <ul>
        {list?.map((item, index )=> <li key={index}>{item} : {index + 1}</li>)}
      </ul>
      <hr />
      <Button label='Increment' onClick={increment} />
      <p>Count : {updateCount()}</p>
    </div>
  );
}

export default Memo;
