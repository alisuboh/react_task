import React, { Component } from "react";
import Input from "./Input";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || "",
    };
  }
  changeValue = (e) => {
    
console.log(e)
console.log(this.refs)
  };


  render() {
    return (
      <>

      <Input
            placeholder="enter your Name"
            label="Name"
            type="text"
            id="name"

          />
            <Input
            placeholder="enter your email"
            label="Email"
            type="text"
            id="email"

          />
            <Input
            placeholder="enter your email"
            label="password"
            type="text"
            id="passowrd"
 
            
          />
        <button    onClick={(e) => {
                        this.changeValue(e);
                      }}>
         Submit
        </button>
        <div>
          {this.state.value}
        </div>
      </>
    );
  }
}
export default TaskForm;
