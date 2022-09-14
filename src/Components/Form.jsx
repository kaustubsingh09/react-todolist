import React, { useState } from "react";
import "../Components/Form.css";

function Form(props) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  function taskHandler(e) {
    setTask(e.target.value);
  }

  function dateHandler(e) {
    setDate(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (task.trim().length === 0) {
      return;
    }
    props.onAddUser(task, date);
    setTask("");
    setDate("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={taskHandler}
          value={task}
          className="task"
          type="text"
          placeholder="Enter task.."
        />
        <input
          onChange={dateHandler}
          value={date}
          className="date"
          type="date"
          placeholder="Enter Deadline.."
        />
        <div className="btn">
          <button className="submit-btn">Submit</button>
        </div>
      </form>
      <div className="error-box"></div>
    </div>
  );
}

export default Form;
