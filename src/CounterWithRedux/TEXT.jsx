import { useState } from 'react';
// import './Counter.css'; // Add your custom styling here

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Split the count into individual digits (you can customize this further)
  const digits = count.toString().split('').map(Number);

  return (
    <div className="analog-counter flex items-center justify-center">
      {digits.map((digit, index) => (
        <span key={index} className="digit">
          {digit}
        </span>
      ))}
      <div className="buttons">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter2;
