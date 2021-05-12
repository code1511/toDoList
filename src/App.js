import React, { useState } from 'react';
import TodoList from './TodoList';

const App=()=>{
  const [inputList,setInputList]=useState("this is");
const [Items,setItems]= useState([]);

  const itemEvent=(event)=>{
     setInputList(event.target.value);
  };
//hooks in rect
//creating hook

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    });
    setInputList("");
  };
  const deleteItems=(id)=>{
    console.log("hello");

    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      })
    });
}
  return(
<>
<div className="main_div">
  <div className="center_div">
    <br />
    <h1>ToDo List</h1>
    <br />
    <input type="text" name="text" value={inputList } placeholder="add an item here" onChange={itemEvent} />
    <button onClick={listOfItems}> + </button>
    <ul>
      {
     Items.map((itemval,index) => {
        return (<TodoList
          key={index}
          id={index}
          text={itemval}
          onSelect={deleteItems}
          />)
     })}
    </ul>

  </div>

</div>
</>
  )
};


export default App;
