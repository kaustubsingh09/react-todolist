import React, { Fragment, useState} from "react";
import "./App.css";
import DisplayTodo from "./Components/DisplayTodo";
import Form from "./Components/Form";

function App() {
  const [users, setUserList] = useState([]);

  function addUserHandler(userName, userDate) {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, date: userDate, key: Math.floor(Math.random() * 1000) },
      ];
    });
  }

  return (
    <Fragment>
      <div className="back">
        <h1 className="head">To-DO List</h1>
        <div className="form-box">
          <Form onAddUser={addUserHandler} />
        </div>
      </div>
      <DisplayTodo users={users} updateList={setUserList}/>
    </Fragment>
  );
}

export default App;
