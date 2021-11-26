import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
//import io from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';
import getRequest from './clientAPI';

function App() {

  const [socket, setSocket] = useState(null);
  const [data, setData] = useState('');
  useEffect(async() => {
    const response = await getRequest();
    setData(response);
    console.log(response);
  }
  )
//     useEffect(() => {
//     const newSocket = io(`http://${window.location.hostname}:3001`);
//     setSocket(newSocket);
//     return () => newSocket.close();
//   }, [setSocket]);

  return (
    <div className="Chat">
      <h1>Chat With Socket.io</h1>
      {data}
      <p> this will be the chat window function!</p>

      <div>
        {socket ? (
          <div className="chat-container">
            <Messages socket={socket} />
            <MessageInput socket={socket} />
          </div>
        ) : (
          <div>Not Connected</div>
        )}
      </div>
    </div>
  );
}

export default App;
