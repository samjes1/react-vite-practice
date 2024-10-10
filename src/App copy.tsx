/* import { useState } from 'react' */

import { useEffect, useState } from "react";
import "./App.scss";
import Button from "./components/Button";
/* import Title from "./components/title"; */

function App() {
  const name = "soy tu nueva interfaz de navegación";
  const [count, setCount] = useState(0);
  console.log(count); 

  useEffect(() => {
   // TODO : Fetch de muestra superAPI
    
  
  
  }, [])
  
  
  return (
   <>
   
    <p>
      Hola, {name}
    {/* 
      <div>
        <Title text=""/> */}
       {/*  esto nos indica un error la cual hay que pasarle un texto ajuro, pero como esta por parametro tomara por default el que colocamos */}
     {/*    <Title text="este es el texto del componente 1" />
        <Title text="este es el texto del componente 2" />
        <Title text="este es el texto del componente 3" />
      </div>
      <Button onClick={() => alert("Primer Boton")} /> */}
      <Button onClick={() => setCount((prevCount) => prevCount + 1)} text={`Number of clicks: ${count}` }/>
    </p>
   </>
  );
}

export default App;
