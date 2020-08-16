import React, { Component } from "react";
import style from "./Input.module.css";
import TaskForm from "./TaskForm";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || "",
    };
  }

  changeValue = (e) => {
    console.log(e.target.value,this.props.id);

    this.setState({
      value: this.props.name,

    });
    // console.log(TaskForm.props);
    // TaskForm.state.value = e.target.value;
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-3">
            <label className={style.label}>{this.props.label}</label>
          </div>
          <div className="col-sm-9">
            <div className={style.inputContainer}>
              {(this.props.type === "text") && (
                <input
                  placeholder={this.props.placeholder && this.props.placeholder}
                  onChange={(e) => {
                    this.changeValue(e);
                  }}
                  
                  type="text"
                  value={this.state.value}
                  id={this.props.id && this.props.id}

                />
              )}
             
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Input;
