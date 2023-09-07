import React, { useState } from 'react';

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([{id:1,name:"item 1"}]);
  const [editValue, setEditValue] = useState([{id:1,name:"item 1"}]);
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  const addItem = () => {
    setList([...list, {id: Math.floor(Math.random()*10),name:inputValue}]);
  };
  const handleEdit = () => {
    setList([...list, {id: Math.floor(Math.random()*10),name:inputValue}]);
  };
  const removeItem = (item:number) => {
    console.log("sample",item);
    const filteredList = list.filter(el => el.id !== item);
    setList(filteredList);
  };
  return (
    <div>
     <label htmlFor="inputValue">Todo Title :  </label>
      <input type="text" name="inputValue" id="inputValue" value={inputValue} onChange={handleChange}/>
      <button onClick={addItem}>Add Item</button>
      <label htmlFor="editValue">Edit Todo Title :  </label>
      <input type="text" name="editValue" id="editValue" value={editValue.name} onChange={handleEdit}/>
      <button onClick={addItem}>Update-Item</button>
      <ul>
        {list.map((item) => <li key={item.id}>{item.name} <button onClick={()=>removeItem(item.id)}>Edit</button> <button onClick={()=>removeItem(item.id)}>X</button></li>)}
      </ul>
    </div>
  );
}

export default Todo;
