import "./Todo.css";
import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const content = e.target.elements.content.value;
    const category = e.target.elements.category.value;

    if (content.trim() === "") {
      return; // Tidak menambahkan tugas jika konten kosong
    }

    const todo = {
      id: Date.now(),
      content: content,
      category: category,
      done: false,
      createdAt: new Date().getTime(),
    };

    setTodos((prevTodos) => [...prevTodos, todo]);

    e.target.reset();
  };

  const handleTodoCheck = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleTodoEdit = (id, value) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: value };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleTodoDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const handleEditButtonClick = (id) => {
    setEditingTodoId(id);
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
  };

  const handleUpdateTodo = (id, value) => {
    handleTodoEdit(id, value);
    setEditingTodoId(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Complete") {
      return todo.done;
    } else if (filter === "Incomplete") {
      return !todo.done;
    }
    return true;
  });

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
            <select
              name="progress"
              className="filter-todo"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="All">All</option>
              <option value="Complete">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
          <div className="list" id="todo-list">
            {filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className={`todo-item ${todo.id ? "editing" : ""}`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => handleTodoCheck(todo.id)}
                  />
                  <span className={`bubble ${todo.category}`} />
                </label>
                <div className="todo-content">
                  {editingTodoId === todo.id ? (
                    <input
                      type="text"
                      value={todo.content}
                      onChange={(e) => handleTodoEdit(todo.id, e.target.value)}
                    />
                  ) : (
                    <span>{todo.content}</span>
                  )}
                </div>
                <div className="actions">
                  {editingTodoId === todo.id ? (
                    <>
                      <button
                        className="save"
                        onClick={() => handleUpdateTodo(todo.id, todo.content)}
                      >
                        Save
                      </button>
                      <button className="cancel" onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="edit"
                      onClick={() => handleEditButtonClick(todo.id)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="delete"
                    onClick={() => handleTodoDelete(todo.id)}
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
