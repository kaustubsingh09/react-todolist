import React from "react";
import "../Components/DisplayTodo.css";

function DisplayTodo(props) {
  function deleteTodo(key) {
    const newList = props.users.filter((item) => {
      return item.key !== key;
    });
    props.updateList(newList);
  }

  return (
    <div>
      <div className="todo-box">
        <ul>
          {props.users.map((user) => (
            <li className="daily-task" key={user.key}>
              {user.name} ({user.date} Deadline)
              <button
                onClick={() => deleteTodo(user.key)}
                className="del-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DisplayTodo;
