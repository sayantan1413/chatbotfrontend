import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import MessageBox from './components/Messagebox';
import Textbox from './components/Textbox';
const App = () => {
  const [message, setMessage] = useState([
    {
      type: 1,
      text: 'Hello! How are you doing today?',
    },
  ]);

  const handleNewUserMessage = (text) => {
    console.log(text, 'text');
    console.log(text[0]);
    setMessage((prev) => [...message, { type: 0, text: text[0]?.text }]);
    let temp = {
      msg: text,
    };
    console.log('temp: ', temp);
    axios
      .post('http://localhost:5000/predict', {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
          accept: 'application/json',
        },
        temp,
      })
      .then((res) => {
        console.log('res.data: ', res.data);
        setMessage((prev) => [...message, { type: 1, text: res?.data }]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="messageBox">
        <MessageBox messageContent={message} />
      </div>
      <Textbox handlerFromParant={handleNewUserMessage} />
    </div>
  );
};
export default App;
