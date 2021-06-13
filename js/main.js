document
  .getElementById("formulario")
  .addEventListener("submit", cadastraVeiculo);

const modeloCarro = document.getElementById("modeloCarro").value;
const placaCarro = document.getElementById("placaCarro").value;
const time = new Date();
function cadastraVeiculo(e) {
  carro = {
    modelo: modeloCarro,
    placa: placaCarro,
    hora: time.getHours(),
    minutos: time.getMinutes(),
  };

  localStorage.setItem("teste", "Ola mundo!");
  console.log(localStorage.getItem("teste"));
  localStorage.removeItem("teste");
  console.log(localStorage.getItem("teste"));

  e.preventDefault();
}
