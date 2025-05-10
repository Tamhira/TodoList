import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Itemscontainer from "./components/Itemcontainer";
import Message from "./components/WelcomeMessage";

function App() {
  const [Items, setItems] = useState([]);

  //same as below function but long
  // const handleNewItem = (todoname, duedate) => { 
  //   setItems((currentValue) =>{
  //     const NewTodoItems = [...currentValue, { name: todoname, date: duedate }];
  //     return NewTodoItems;
  //   }); 
  // };

  //functional update
  const handleNewItem = (todoname, duedate) => { 
    setItems((currentValue) =>
      [...currentValue, { name: todoname, date: duedate }]
    ); 
  };

  const handleDeleteItem = (todoItemName) => {
    const NewTodoItems = Items.filter((item) => item.name !== todoItemName);
    setItems(NewTodoItems);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-[#352F5B] font-mono">
        <div className="gap-4 md:w-[500px] w-full p-4">
          <div className="text-white text-3xl font-bold text-center py-4 bg-[#2A2649] my-4 rounded-xl">
            Todo List
          </div>

          <div>
            <AddTodo onNewItem={handleNewItem} />
          </div>

          <div className="h-[320px] py-4 lg:px-8 px-4 overflow-y-auto rounded-xl bg-[#423A6F]">
            {Items.length === 0 && <Message />}
            <Itemscontainer
              Items={Items}
              onDeleteClick={handleDeleteItem}
            ></Itemscontainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
