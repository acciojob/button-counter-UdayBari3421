import React, { useState } from "react";

const Box = () => {
  let [count, setCount] = useState(0);

  function callback() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={callback}>Click me</button>
    </div>
  );
};

export default Box;
