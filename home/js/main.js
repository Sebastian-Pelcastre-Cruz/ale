import tarjetas from "./constants.js";

const primero = document.getElementById("primero");
const siguienteButton = document.getElementById("siguiente");

siguienteButton.addEventListener("click", submit);

function submit() {
  console.log(tarjetas);
  // Aquí puedes hacer lo que necesites con las tarjetas
}
