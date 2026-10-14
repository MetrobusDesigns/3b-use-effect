import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);
  const [triple, setTriple] = useState(0);
  const [quads, setQuads] = useState(0);
  useEffect(() => {
    // double = count*2
    setDouble(count * 2);

  }, [count]);

  useEffect(() => {
    setTriple(count * 3);
    
  }, [count]);

  useEffect(() => { 
    setQuads(count *4);
  }, [count])
  return (
    <>
      <h2>Counter</h2>
      <h4>Count: {count}</h4>
      <h4>Double: {double}</h4>
      <h4>Triple: {triple}</h4>
      <h4>Quads: {quads}</h4>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count * count)}>Square</button>
    </>
  );
};

export default Counter;
