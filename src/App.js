import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const input1 = useRef();
  const but=()=>{
    console.log(input1.current.value);
  } 
 
  return (
    <>
    <input type="text" ref={input1}/>
    <button onClick={but}>button</button>
    </>
  );
}

export default App;
