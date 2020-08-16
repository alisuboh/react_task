import React, { Component } from 'react'
import MyChild from './MyChild'

class MyContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      // data:[
      //   {"key":"name","value":"a","required":true},
      //   {"key":"phone","value":"b","required":true},
      //   {"key":"email","value":"c","required":false},
      // ],
      showfinalDiv:false,
      showfinalDiv_req:[false,false,true],
    };

    this.abc = this.abc.bind(this) ;

  }

  setvalue=(keyIndex,value,index)=>{
    
      if(typeof index != "undefined"){
        let showfinalDiv_req = [...this.state.showfinalDiv_req];
        let req = {...showfinalDiv_req[index]};
        req = value;
        showfinalDiv_req[index] = req;
        this.setState({showfinalDiv_req});
      }else
        this.setState({[keyIndex]:value})

  }

  abc=(key,value,index)=>{

    this.setvalue(key,value,index)
  }
   istrue = (currentValue) => currentValue == true;

  setvaluetoshow =()=>{
    if(this.state.showfinalDiv_req.every(this.istrue)){
      this.abc("showfinalDiv",true,undefined)

    }else{
      this.abc("showfinalDiv",false,undefined)
 
    }
    // this.state.showfinalDiv_req.map(function(item, i){
    //   console.log(item, i)
    //   this.abc("showfinalDiv",item,undefined)
    //   if(!item){    
    //     this.abc("showfinalDiv",false,undefined)
    //   }
    // },this)
  }

  
  render() {
  
    return (
      <>
                 {/* {this.state.data[0].value}

      {Object.keys(this.state.data).map(index => 
      
                <MyChild key={index} name={this.state.data[index].value} onblr={(e)=>this.abc("showfinalDiv",e)} required={true} onNameChange={(newValue)=>{this.setvalue(index,newValue)}} /> 
          
        )} */}

         {!this.state.showfinalDiv_req[0]?"required":""}<MyChild name={this.state.name} onblr={(e)=>this.abc("showfinalDiv_req",e,0)} required={!this.state.showfinalDiv_req[0]} onNameChange={(newValue)=>{this.setvalue("name",newValue)}} /> 
         {!this.state.showfinalDiv_req[1]?"required":""}<MyChild name={this.state.email} onblr={(e)=>this.abc("showfinalDiv_req",e,1)} required={!this.state.showfinalDiv_req[1]} onNameChange={(newValue)=>{this.setvalue("email",newValue)}} /> 
         {!this.state.showfinalDiv_req[2]?"required":""}<MyChild name={this.state.phone} onblr={(e)=>console.log('herer')} required={!this.state.showfinalDiv_req[2]} onNameChange={(newValue)=>{this.setvalue("phone",newValue)}} /> 

         <button onClick={()=> this.setvaluetoshow() } type="submit">Submit</button>


         
         {this.state.showfinalDiv&&
            <div>
              {"name = "+this.state.name}
              {"email = "+this.state.email}
              {"phone = "+this.state.phone}
            </div>
          }
      </>
    
    )
  }

}

export default MyContainer
