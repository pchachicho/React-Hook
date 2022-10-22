import React, { useState } from "react";

function App() {
  const [currentState, updatedState] = useState(4);

  function decreaseCount() {
    updatedState(currentState - 1);
  }
  function increaseCount() {
    updatedState(currentState + 1);
  }
  return (
    <>
      <button onClick={decreaseCount}>-</button>
      <span>{currentState}</span>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default App;
