import './Todo.css'
import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime(),
    };

    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    e.target.reset();
  };

  const handleTodoCheck = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleTodoEdit = (index, value) => {
    const updatedTodos = [...todos];
    updatedTodos[index].content = value;

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleTodoDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); 
  }; 

  return (
    <>
      <div className="app-container" id="app">
        <section className="create-todo">
          <h2>CREATE A TODO</h2>
          <form id="new-todo-form" onSubmit={handleFormSubmit}>
            <div>
              <h3>What's on your todo list?</h3>
              <input
                type="text"
                name="content"
                id="content"
                size="40"
                placeholder="e.g. Learn Next.js"
              />
            </div>
            <h3>Priority</h3>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="category"
                  id="category1"
                  value="urgent"
                />
                <span className="bubble urgent"></span>
                <div>Urgent</div>
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  id="category2"
                  value="notUrgent"
                />
                <span className="bubble notUrgent"></span>
                <div>Not Urgent</div>
              </label>
            </div>
            <br />
            <input type="submit" value="Add Todo" />
          </form>
        </section>
        <section className="todo-list">
          <h3>TODO LIST</h3>
          <div className="select">
            <select name="progress" className="filter-todo">
              <option value="All">All</option>
              <option value="Complete">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
          <div className="list" id="todo-list">
            {todos.map((todo, index) => (
              <div
                key={index}
                className={`todo-item ${todo.done ? "done" : ""}`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => handleTodoCheck(index)}
                  />
                  <span className={`bubble ${todo.category}`} />
                  <div>{todo.category}</div>
                </label>
                <div className="todo-content">
                  <input
                    type="text"
                    value={todo.content}
                    readOnly={!todo.done}
                    onChange={(e) => handleTodoEdit(index, e.target.value)}
                  />
                </div>
                <div className="actions">
                  <button
                    className="edit"
                    onClick={() => handleTodoEdit(index, todo.content)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleTodoDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
export default Todo;
