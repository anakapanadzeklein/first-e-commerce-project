import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/firstSlice';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.firstSlice.value);

  return (
    <div className="flex mt-4 border border-gray-200 w-40 h-11 items-center justify-between gap-4 px-6">
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;