import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value)
  };
  const listofItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    // console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
        
      })
    })
}

  return (
    <>
      <div className="main-div">
        <div className="row adjust-mid">
          <div className="col-12 col-md-12 center_div ">
            <br></br>
            <h1 >ToDO List</h1>
            <br></br>
            <input type="text" value={inputList} id="form1" onChange={itemEvent} className="form-control-sm icss" placeholder="add a item" />&nbsp;

            <button type="button" onClick={listofItem} className="btn btn-primary btn-sm bcss "> + </button>



            <ol className="list-unstyled mt-4">
              {/* <li className="  text-left font-weight-bold">{inputList}</li> */}
              {Items.map((itemval, index) => {
                // return <li className="  text-left font-weight-bold">{itemval}</li>
                return <TodoList
                  key={index} id={index}
                  text={itemval}
                  onSelect = {deleteItems}
                />;
              })}
            </ol>
          </div>
        </div>
      </div>



    </>
  );
}

export default App;
