// // ChatWidget.jsx
// import { useState } from 'react';
// import { getChatResponse } from '../library/openai'; // Import the updated function

// export default function ChatWidget() {
//   const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hi! How can I help you today?' }]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const exampleQuestions = ['How do I sell my license?', 'What products do you support?', 'Do you offer refunds?'];

//   const sendMessage = async (text) => {
//     if (!text) return;
//     const newMessages = [...messages, { sender: 'user', text }];
//     setMessages(newMessages);
//     setLoading(true);

//     const reply = await getChatResponse(text);
//     setMessages([...newMessages, { sender: 'bot', text: reply }]);
//     setInput('');
//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 z-50 right-4 w-[320px] bg-white shadow-xl rounded-xl border overflow-hidden">
//       <div className="bg-blue-600 text-white p-3 font-semibold">💬 Chat with SoftSell</div>
//       <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
//         {messages.map((m, i) => (
//           <div key={i} className={`p-2 rounded ${m.sender === 'user' ? 'bg-gray-100 text-right' : 'bg-blue-50 text-left'}`}>
//             {m.text}
//           </div>
//         ))}
//         {loading && <div className="text-gray-400">Typing...</div>}
//       </div>
//       <div className="p-2 border-t flex items-center gap-2">
//         <input
//           className="flex-grow p-2 border rounded text-sm"
//           placeholder="Ask a question..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
//         />
//         <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm" onClick={() => sendMessage(input)}>
//           Send
//         </button>
//       </div>
//       <div className="bg-gray-100 p-2 text-xs text-gray-600">
//         Try: {exampleQuestions.map((q, i) => (
//           <button key={i} onClick={() => sendMessage(q)} className="underline mr-2 hover:text-blue-600">{q}</button>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useState, useRef, useEffect } from 'react';
// import { PaperAirplaneIcon, XMarkIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

// const ChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: 'assistant', content: 'Hello! How can I help you today?' }
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   // Example questions
//   const exampleQuestions = [
//     'How do I sell my license?',
//     'What are your business hours?',
//     'Where can I find pricing information?',
//     'How do I contact support?'
//   ];

//   // Scroll to bottom of chat
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!inputValue.trim() || isLoading) return;

//     // Add user message
//     const userMessage = { role: 'user', content: inputValue };
//     setMessages(prev => [...prev, userMessage]);
//     setInputValue('');
//     setIsLoading(true);

//     try {
//       // Call OpenAI API
//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
//         },
//         body: JSON.stringify({
//           model: 'gpt-3.5-turbo',
//           messages: [
//             {
//               role: 'system',
//               content: 'You are a helpful customer support assistant. Be friendly and concise.'
//             },
//             ...messages.map(msg => ({ role: msg.role, content: msg.content })),
//             { role: 'user', content: inputValue }
//           ],
//           temperature: 0.7
//         })
//       });

//       const data = await response.json();
//       const aiMessage = data.choices[0].message;

//       setMessages(prev => [...prev, { role: 'assistant', content: aiMessage.content }]);
//     } catch (error) {
//       console.error('Error calling OpenAI API:', error);
//       setMessages(prev => [...prev, { 
//         role: 'assistant', 
//         content: "Sorry, I'm having trouble connecting. Please try again later." 
//       }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleExampleQuestion = (question) => {
//     setInputValue(question);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {isOpen ? (
//         <div className="w-80 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
//           <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
//             <h3 className="font-semibold">Customer Support</h3>
//             <button 
//               onClick={() => setIsOpen(false)}
//               className="text-white hover:text-blue-200"
//             >
//               <XMarkIcon className="h-5 w-5" />
//             </button>
//           </div>
          
//           <div className="flex-1 p-4 overflow-y-auto">
//             {messages.map((msg, index) => (
//               <div 
//                 key={index} 
//                 className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
//               >
//                 <div 
//                   className={`inline-block px-4 py-2 rounded-lg max-w-xs ${msg.role === 'user' 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-gray-200 text-gray-800'}`}
//                 >
//                   {msg.content}
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="text-left mb-4">
//                 <div className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
//                   Thinking...
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
          
//           <div className="p-4 border-t">
//             {messages.length === 1 && (
//               <div className="mb-3">
//                 <p className="text-sm text-gray-500 mb-2">Try asking:</p>
//                 <div className="flex flex-wrap gap-2">
//                   {exampleQuestions.map((question, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handleExampleQuestion(question)}
//                       className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full"
//                     >
//                       {question}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//             <form onSubmit={handleSubmit} className="flex gap-2">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Type your question..."
//                 className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 disabled={isLoading}
//               />
//               <button
//                 type="submit"
//                 disabled={!inputValue.trim() || isLoading}
//                 className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <PaperAirplaneIcon className="h-5 w-5" />
//               </button>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
//         >
//           <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
//         </button>
//       )}
//     </div>
//   );
// };

// export default ChatWidget;
import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, XMarkIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I assist you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const exampleQuestions = [
    'How do I sell my license?',
    'What are your business hours?',
    'Where can I find pricing information?',
    'How do I contact support?'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getCustomReply = (question) => {
    const replies = {
      'How do I sell my license?': 'To sell your license, please visit our licensing portal.',
      'What are your business hours?': 'Our business hours are Monday to Friday, 9 AM to 5 PM.',
      'Where can I find pricing information?': 'You can find pricing information on our pricing page.',
      'How do I contact support?': 'You can contact support via email at support@example.com.'
    };
    return replies[question] || 'I\'m sorry, I don\'t have information on that.';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const customReply = getCustomReply(inputValue);
    const aiMessage = { role: 'assistant', content: customReply };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const handleExampleQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Customer Support</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-blue-200">
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block px-4 py-2 rounded-lg max-w-xs ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
                  Thinking...
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
                    <button key={index} onClick={() => handleExampleQuestion(question)} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
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
