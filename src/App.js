import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './Componant/Input.jsx';
import TaskForm from './Componant/TaskForm.jsx';
import MyContainer from './Componant/MyContainer.jsx';

function App() {
  return (
    <div className="App">
        <div className="show_input">
          <MyContainer />
        </div>
        <div className="show_data">

        </div>
    </div>
  );
}

export default App;
