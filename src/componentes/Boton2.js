import "../hojas-de-estilos/Boton.css";

function Boton2({ texto, esBotonDeClic, manejarClic2 }) {
  return (
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic2}
    >
      {texto}
    </button>
  );
}

export default Boton2;
