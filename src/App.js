import React, { useState } from "react";

function App() {
  const [currentState, updatedState] = useState(4);

  function decreaseCount() {
    updatedState((previousCount) => previousCount - 1);
  }
  function increaseCount() {
    updatedState((previousCount) => previousCount + 1);
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
