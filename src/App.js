import "./App.css";
import Boton1 from "./componentes/Boton1";
import Boton2 from "./componentes/Boton2";
import Contador1 from "./componentes/Contador1";
import Contador2 from "./componentes/Contador2";
import escudoSanLorenzo from "./imagenes/escudoSanLorenzo.png";
import escudoHuracan from "./imagenes/escudoHuracan.png";
import { useState } from "react";

function App() {
  const [numClics1, setNumClics1] = useState(0);
  const [numClics2, setNumClics2] = useState(0);

  const manejarClic1 = () => {
    setNumClics1(numClics1 + 1);
  };

  const reiniciarContador1 = () => {
    setNumClics1(0);
  };

  const manejarClic2 = () => {
    setNumClics2(numClics2 + 1);
  };

  const reiniciarContador2 = () => {
    setNumClics2(0);
  };

  return (
    <div className="App">
      <div className="casla-logo-contenedor">
        <img className="casla-logo" src={escudoSanLorenzo} alt="CASLA" />

        <img className="casla-logo" src={escudoHuracan} alt="Huracan" />
      </div>

      <div className="contenedor-principal">
        <Contador1 numClics1={numClics1} />
        <Boton1 texto="GOL" esBotonDeClic={true} manejarClic1={manejarClic1} />
        <Boton1
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic1={reiniciarContador1}
        />
      </div>

      <div className="contenedor-principal">
        <Contador2 numClics2={numClics2} />
        <Boton2 texto="GOL" esBotonDeClic={true} manejarClic2={manejarClic2} />
        <Boton2
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic2={reiniciarContador2}
        />
      </div>
    </div>
  );
}

export default App;
