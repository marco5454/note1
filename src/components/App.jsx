import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");
  const [arrayItems, setArrayItems] = useState([]);

  function changeHandler(e) {
    const newValue = e.target.value;
    setListItem(newValue);
  }

  function submitItem(e) {
    setArrayItems(function (prevValue) {
      return [...prevValue, listItem];
    });
  }

  return (
    <div>
      <div className="wrapper">
        <div className="note-container">
          <h1 className="title">Notes for your life</h1>
          <div className="note-layout">
            <div className="add-items">
              <input
                type="text"
                placeholder="Enter your items here"
                value={listItem}
                onChange={changeHandler}
              />
              <button onClick={submitItem}>Add item</button>
            </div>
            <div className="added-items">
              <ul>
                {arrayItems.map(function (itemList) {
                  return <li>{itemList}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
