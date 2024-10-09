/* import { useState } from 'react' */

import "./App.css";
import Button from "./components/Button";
import Title from "./components/title";

function App() {
  const name = "soy tu nueva interfaz de navegación";
  return (
    <p>
      Hola, {name}
      <div>
        <Title />
       {/*  esto nos indica un error la cual hay que pasarle un texto ajuro, pero como esta por parametro tomara por default el que colocamos */}
        <Title text="este es el texto del componente 1" />
        <Title text="este es el texto del componente 2" />
        <Title text="este es el texto del componente 3" />
      </div>
      <Button/>
    </p>

  );
}

export default App;
