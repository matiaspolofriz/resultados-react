import "../hojas-de-estilos/Boton.css";

function Boton1({ texto, esBotonDeClic, manejarClic1 }) {
  return (
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic1}
    >
      {texto}
    </button>
  );
}

export default Boton1;
