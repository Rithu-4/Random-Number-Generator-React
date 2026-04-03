import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';

function App() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="container">
      <h1>🎲 Random Number Generator</h1>

      {/* Conditional Rendering */}
      <p className="result">
        {number === null
          ? "No number generated yet"
          : `Generated Number: ${number}`}
      </p>

      <button onClick={generateNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
);

