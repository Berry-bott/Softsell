// =====CUSTOMER CHAT =======
// This is a simple chat widget component that allows users to ask questions and receive predefined responses.
// It uses React hooks for state management and handles user input and AI responses.
// The component is styled using Tailwind CSS and includes a button to toggle the chat window.
// The chat widget includes a list of example questions that users can click to auto-fill the input field, in a mock form.


import React, { useState, useRef, useEffect } from 'react';
import {
  PaperAirplaneIcon,
  XMarkIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I assist you today?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const exampleQuestions = [
    'How do I sell my license?',
    'What are your business hours?',
    'Where can I find pricing information?',
    'How do I contact support?',
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getCustomReply = (question) => {
    const replies = {
      'How do I sell my license?':
        'To sell your license, please visit our licensing portal.',
      'What are your business hours?':
        'Our business hours are Monday to Friday, 9 AM to 5 PM.',
      'Where can I find pricing information?':
        'You can find pricing information on our pricing page.',
      'How do I contact support?':
        'You can contact support via email at support@example.com.',
    };
    return replies[question] || "I'm sorry, I don't have information on that.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const customReply = getCustomReply(userMessage.content);
      const aiMessage = { role: 'assistant', content: customReply };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000); // 1-second delay
  };

  const handleExampleQuestion = (question) => {
    const userMessage = { role: 'user', content: question };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setInputValue('');

    setTimeout(() => {
      const customReply = getCustomReply(question);
      const aiMessage = { role: 'assistant', content: customReply };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000); // 1-second delay
  };

  const handleRefresh = () => {
    setMessages([
      { role: 'assistant', content: 'Hello! How can I assist you today?' },
    ]);
    setInputValue('');
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Customer Support</h3>
            <div className="flex space-x-2">
              <button
                onClick={handleRefresh}
                className="text-white hover:text-blue-200"
              >
                <ArrowPathIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-200"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  msg.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg max-w-xs ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block px-4 py-1 rounded-lg bg-gray-200 text-gray-800">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t">
            {messages.length === 1 && (
              <div className="mb-3">
                <p className="text-sm text-gray-500 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleQuestion(question)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
