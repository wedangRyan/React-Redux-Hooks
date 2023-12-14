import React, { useState } from 'react';
import { Menerimahook } from './Menerimahook';

export function Hookse() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div style={{padding: '100px'}}>
      <p>REACT HOOKS</p>
      <button onClick={() => setCount(count + 1)}>
        HOOKS
      </button>
      <Menerimahook count={count}/>
    </div>
  );
}