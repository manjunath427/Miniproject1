import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import CardExample from './Screen/User';

class Todo extends Component {
  constructor()
  {
    super();
    this.state={
      user : [{"id":"5",
      "first_name":"Rosemary",
      "last_name":"Botsford",
      "gender":"female",
      "dob":"2003-03-13",
      "email":"maverick.howe@example.org"}]
    };
  }
  render() {
    return (
     
  
      <div className="task-value">
      <CardExample/>
      </div>
     
    )
  }
}
export default Todo;