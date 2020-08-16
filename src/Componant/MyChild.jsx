import React, { Component } from 'react'
import style from "./MyChild.module.css";
import styleinput from "./Input.module.css";

class MyChild extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value:this.props.name||"",
      colorname:'',
          }

  }

  static getDerivedStateFromProps(nextProps, prevState){
    // debugger
    
    return {value:nextProps.name,colorname:nextProps.required && (nextProps.name == "" || typeof nextProps.name == "undefined")?"":style.green};
  }


  // handleInputChange = event => {
  //   console.log(this.props,event.target.value)
  //   this.setState(
  //     {
        
  //       value:event.target.value,
  //       colorname:!this.props.required && (this.props.name == "" || typeof this.props.name == "undefined")?"":style.green
  //     }
  //   )

  // }

  getPassValue=()=>{
    return this.state.value!="" ?true:false
  }

  render() {
    return (

      <>
      <div className="row">
        <div className="col-sm-3">
          <label className={styleinput.label}>{this.props.label}</label>
        </div>
        <div className="col-sm-9">
          <div className={styleinput.inputContainer}>
          <input onChange={(e)=>this.props.onNameChange(e.target.value)}  value={this.state.value} className={this.state.colorname} type="text" onBlur={()=>this.props.onblr(this.getPassValue())}   required={this.props.required && (this.props.name == "" || typeof this.props.name == "undefined") ?true:false}   />

           
          </div>
        </div>
      </div>
    </>

    )
  }

}

export default MyChild