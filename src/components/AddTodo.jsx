import React, { useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    todoNameElement.current.value="";
    dueDateElement.current.value="";
  };

  return (
    <div className="w-full">
      <h1 className="text-white text-center text-xl pb-2">Add a new todo...</h1>
      <form className="flex justify-center mb-4 gap-4" onSubmit={handleAddButtonClicked}>
        <div className="w-full md:w-6/7 flex md:gap-4 gap-2 md:flex-row flex-col">
          <div className="md:w-3/5">
            <input
              type="text"
              placeholder="Enter To Do Here"
              className="w-full p-2 rounded-lg bg-[#2A2649] text-white"
              ref={todoNameElement}
            />
          </div>
          <div className="md:w-2/5">
            <input
              type="date"
              className="w-full p-2 rounded-lg bg-[#2A2649] text-white"
              ref={dueDateElement}
            />
          </div>
        </div>
        <div className="w-1/7 flex justify-end md:items-center items-start">
          <button
          type="submit"
            className="text-3xl font-bold text-white"
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
