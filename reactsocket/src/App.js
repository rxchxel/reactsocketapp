import './App.css';
import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import Messages from './Messages';
import MessageInput from './MessageInput';
import getRequest from './clientAPI';

function App() {
  
  const socket = io("https://localhost:3001");

  //const [socket, setSocket] = useState(null);
  const [resp, setResp] = useState('');
  const [value, setValue] = useState('');
    useEffect(async() => {
      const response = await getRequest();
      const {data} = response;
      setResp(data);
      console.log(resp);
    }, 
  )

  return (
    <div className="Chat">
      <h1>Chat With Socket.io</h1>

      <p> this will be the chat window function!</p>

      <div>
        {socket ? (
          <div className="chat-container">
            <Messages socket={socket} />
            <MessageInput socket={socket} value={value} setValue={setValue}/>
          </div>
        ) : (
          <div>Not Connected</div>
        )}
      </div>
    </div>
  );
}

export default App;