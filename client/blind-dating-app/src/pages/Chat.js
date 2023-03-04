import React, { useState, useEffect } from 'react';
import './ChatPage.css';
// import { Redirect } from 'react-router-dom';
import Home from './Home';
import { useNavigate } from 'react-router-dom';


const Chat = () => {
  const [timeLeft, setTimeLeft] = useState(10); // 5 minute countdown timer
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const iceBreakers = [
    "What's your favorite hobby?",
    "What's the best vacation you've ever taken?",
    "Do you have any pets?",
    "What's your favorite book/movie/TV show?",
    "What do you like to do for fun?",
    "Where did you grow up?",
    "What's your favorite type of food?",
    "Do you play any sports?",
    "What kind of music do you like?",
    "What's your dream job?",
    "Do you have any siblings?",
    "What's the best concert you've ever been to?",
  ];

  const closeModal = () => {
    // redirect to another page
    window.location.href = '/';
  };
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        isSent: true,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleIceBreakerClick = (iceBreaker) => {
    const newMessage = {
      text: iceBreaker,
      isSent: true,
    };
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time's up!");
      navigate('/');
    }
  }, [timeLeft, navigate]);
  
  
//   useEffect(() => {
//     if (timeLeft <= 0) {
//         alert("Time's Up!");
//         <Redirect to="/"/>
//     }
//   }, [timeLeft]);

  return (
    <> <h2 align='center'>Chatting Page</h2>
    <h2>Welcome, John Doe!</h2>
    <div>
      
      {/* {timeLeft > 0 ? (
        <p>Time left to chat: {timeLeft} seconds</p>
      ) : (
        <p>Time's up</p>
      )} */}

    {timeLeft > 0 ? (
      <p>Time left to chat: {timeLeft} seconds</p>
    ) : (
<p>Time's up</p>    )
    }


      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isSent ? 'message-sent' : 'message-received'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          className="input-field"
          placeholder="Type your message here"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
      <div className="ice-breakers">
        <h3>Conversation Starters:</h3>
        {iceBreakers.map((iceBreaker, index) => (
          <button
            key={index}
            className="ice-breaker-button"
            onClick={() => handleIceBreakerClick(iceBreaker)}
          >
            {iceBreaker}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default Chat;
