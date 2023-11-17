// YourComponent.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../app/reducers/counter';
import { RootState } from '../../app/store';

const YourComponent: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default YourComponent;
