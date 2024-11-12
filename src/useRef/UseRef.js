import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const counter = useRef(0);
  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        -
      </button>
      <h1>no times parsed {counter.current}</h1>
    </>
  );
}

export default App;
