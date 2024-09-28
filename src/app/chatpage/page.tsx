"use client"; // This is a client component 

import RoundedBack from '../components/RoundedBackground';
import Navbar from '../components/RoundedNavbar';
import React, { useState, useEffect, useRef } from 'react';
import RoundedBackChat from '../components/RoundedBackChat';
import {StarIcon, PaperAirplaneIcon} from '@heroicons/react/24/solid'

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi Ethan! I’m SAGE, your personal AI advisor here at UTD. How may I assist you today?', isUser: false }
  ]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatOutputRef = useRef(null);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }|null, prevPage: string|null) => {
    e ? e.preventDefault(): null;
    if (inputText.trim() !== '' || prevPage) {
      const currentText = prevPage ? prevPage : inputText;
      setMessages([...messages, { text: currentText, isUser: true }]);
      setInputText('');
      setIsLoading(true);
      try {
        console.log('Making API request with input:', currentText);
        const response = await fetch('http://localhost:8080/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: currentText }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('API response received:', data);
          setMessages([
            ...messages,
            { text: currentText, isUser: true },
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
            { text: currentText, isUser: true },
            { text: 'Oops! Something went wrong.', isUser: false },
          ]);
        }
      } catch (error) {
        console.error('API request error:', error);
        setMessages([
          ...messages,
          { text: currentText, isUser: true },
          { text: 'Oops! Something went wrong.', isUser: false },
        ]);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const firstMessage = sessionStorage.getItem('first-message')
    firstMessage ? handleSubmit(null, firstMessage) : null
    sessionStorage.removeItem('first-message');
 
    if (chatOutputRef.current) {
      chatOutputRef.current.scrollTop = chatOutputRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex relative">
      <Navbar />
      <div className='bg-dark-purple bg-opacity-50 w-5/6 fixed left-1/2 top-24 transform -translate-x-1/2 rounded-3xl h-[70vh] md:h-[80vh] lg:h-[90vh] p-6 flex justify-center'>
    <div className="mt-[15vh] w-5/6 h-[52vh] top-36 overflow-y-scroll no-scrollbar rounded-3xl" ref={chatOutputRef}>
        
          {messages.map((message, index) => (
            <div className='p-2'>
            <div
              key={index}
              className={`text-light-green font-serif ${message.isUser ? 'text-right ml-auto' : 'text-left mr-auto'}`}>
                {message.isUser ? 'Ethan' : 'SAGE'}
            </div>
            <div
              key={index}
              className={`w-fit block p-4 mb-10 rounded-3xl ${message.isUser ? 'self-end ml-auto bg-dark-purple text-light-green' : 'bg-dark-purple self-start text-light-green mr-auto'}`}
            >
              {message.formatted ? (
                <div dangerouslySetInnerHTML={{ __html: message.text }} />
              ) : (
                message.text
              )}
            </div>
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
        <form onSubmit={handleSubmit} className="fixed bg-white bottom-[10vh] rounded-3xl w-5/6 h-[5vh] border flex flex-row">
          <input
            type="text"
            placeholder=" get sage advice..."
            value={inputText}
            onChange={handleInputChange}
            className='w-[92%] h-full rounded-3xl p-2'
          />
          <div className="flex flex-row h-[5vh] self-end">
            <button type="submit" className='p-2 w-[100%] h-[100%]'><PaperAirplaneIcon color='#2E1F31' opacity={0.7}/></button>
            <StarIcon color='#2E1F31' opacity={0.7}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;