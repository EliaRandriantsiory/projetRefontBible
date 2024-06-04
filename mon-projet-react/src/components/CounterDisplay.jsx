import React from 'react';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
    const count = useSelector((state) => state.count);
  
    return (
      <div className="flex justify-center items-center">
        <span className="text-4xl font-bold">{count}</span>
      </div>
    );
  };
  
  export default CounterDisplay;