// Import React and useState hook
import React, { useState } from 'react';

// Import axios for making HTTP requests
import axios from 'axios';

// Define a custom React component
function ChatGPT() {
  // Define state variables for user input, message history, and loading status
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define a function to handle user input change
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Define a function to handle user input submission
  const handleSubmit = async (event) => {
    // Prevent default browser behavior
    event.preventDefault();

    // Check if input is empty
    if (!input) return;

    // Add user input to message history
    setMessages([...messages, { role: 'user', content: input }]);

    // Clear user input
    setInput('');

    // Set loading status to true
    setLoading(true);

    try {
      // Make a POST request to the API route with your input
      const response = await axios.post('/api/gpt4', { input, input });

      // Get the completion text from the response data
      const completion = response.data.completion;

      // Add completion text to message history
      setMessages([...messages, { role: 'assistant', content: completion }]);

      // Set loading status to false
      setLoading(false);
    } catch (error) {
      // Handle any errors from the API route
      console.error(error);

      // Set loading status to false
      setLoading(false);
    }
  };

  return (
    <div className="chatgpt">
      <h1>ChatGPT Clone with GPT-4</h1>
      <div className="message-history">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <p>{message.content}</p>
          </div>
        ))}
        {loading && (
          <div className="message assistant">
            <p>...</p>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} placeholder="Type something..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatGPT;