import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/firstSlice';

interface CounterProps {
  itemId: number;
  quantity: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

const Counter: React.FC<CounterProps> = ({ itemId, quantity, onIncrement, onDecrement }) => {
  return (
    <div className="flex mt-4 border border-gray-200 w-40 h-11 items-center justify-between gap-4 px-6">
      <button onClick={() => onDecrement(itemId)}>-</button>
      <h1>{quantity}</h1>
      <button onClick={() => onIncrement(itemId)}>+</button>
    </div>
  );
};

export default Counter;
