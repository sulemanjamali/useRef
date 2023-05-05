import React, { useRef } from 'react';

export default function MyComponent() {
  const inputRef = useRef(null);

  function clearInput() {
    inputRef.current.value = '';
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clearInput}>Clear</button>
    </div>
  );
}