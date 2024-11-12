
import './App.css';
import { useState } from 'react';

function App() {
const [car,setCar] = useState({
  brand:"Ferrari",
  color:"Red",
  model:"Rome",
  year:"2023"
}); 
const changeColor = () =>{
  setCar((prev)=>{
    return {...prev,color:"blue"}
  })
}
const [year,setYear] = useState(2023)
const changeYear =() =>{
setYear(year+1); 
}

  return (
   <>
   <h1>My {car.brand}</h1>

  <h2> It is a {car.color} {car.model} from {year}</h2>
  <button onClick={changeColor}>blue</button>
  <button onClick={changeYear}>year</button>
   </>
  );
}

export default App;
