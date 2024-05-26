import './Chat.css';
import RoundedBack from '../components/RoundedBackground';
import Navbar from '../components/RoundedNavbar';
import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {

  const [messages, setMessages] = useState([
    { text: 'Hi Ethan! Im SAGE, your personal AI advisor here at UTD. How may I assist you today?', isUser: false }
  ]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatOutputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText('');
      setIsLoading(true);
      try {
        console.log('Making API request with input:', inputText);
        const response = await fetch('http://localhost:8080/api/chat', { //calling local flask endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: inputText }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('API response received:', data);
          setMessages([
            ...messages,
            { text: inputText, isUser: true },
            {
              text: data.response
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>'),
              isUser: false,
              formatted: true,
            }
          ]);
        } else {
          console.error('API request failed with status:', response.status);
          setMessages([
            ...messages,
            { text: inputText, isUser: true },
            { text: 'Oops! Something went wrong.', isUser: false },
          ]);
        }
      } catch (error) {
        console.error('API request error:', error);
        setMessages([
          ...messages,
          { text: inputText, isUser: true },
          { text: 'Oops! Something went wrong.', isUser: false },
        ]);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatOutputRef.current) {
      chatOutputRef.current.scrollTop = chatOutputRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <RoundedBack />
      <Navbar />
      <div className="chat-output" ref={chatOutputRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}
          >
            {message.formatted ? (
              <div dangerouslySetInnerHTML={{ __html: message.text }} />
            ) : (
              message.text
            )}
          </div>
        ))}
        {isLoading && (
          <div className="loading-box">
            <div className="loading-circle"></div>
            <div className="loading-circle"></div>
            <div className="loading-circle"></div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="text-field">
        <input
          type="text"
          placeholder=" get sage advice..."
          value={inputText}
          onChange={handleInputChange}
        />
        <div className="submit-container">
          <button type="submit"></button>
        </div>
      </form>
    </div>
  );
}

export default Chat;