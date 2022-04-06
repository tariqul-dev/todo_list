import React, { useState } from "react";
import List from './List';
import Input from "./Input";
import AddButton from "./AddButton";
import Heading from "./Heading";

function App() {

  const [listItems, setListItems] = useState('');
  const [itemsList, setItemList] = useState([]);

  const inputEvent = (event) => {
    setListItems(event.target.value);
  }


  const storeValueAndRead = () => {
    setItemList((preValue) => {
      return [
        ...preValue,
        listItems,
      ];
    });
    setListItems('');
  };

  const onDelete = (id) => {
    console.log("Deleted" + id);
    setItemList((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    })
  }


  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <Heading title="ToDo List" />

        <Input
          onChange={inputEvent}
          value={listItems}
        />

        <AddButton onClick={storeValueAndRead} />

        <ol>
          {
            itemsList.map((value, index) => {
              return <List
                key={index}
                id={index}
                text={value}
                onClick={onDelete} />
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
