document
  .getElementById("formulario")
  .addEventListener("submit", cadastraVeiculo);

function cadastraVeiculo(e) {
  const modeloCarro = document.getElementById("modeloCarro").value;
  const placaCarro = document.getElementById("placaCarro").value;
  const time = new Date();

  carro = {
    modelo: modeloCarro,
    placa: placaCarro,
    hora: time.getHours(),
    minutos: time.getMinutes(),
  };

  if (localStorage.getItem("patio2") === null) {
    var carros = [];
    carros.push(carro);
    localStorage.setItem("patio2", JSON.stringify(carros));
  } else {
    var carros = JSON.parse(localStorage.getItem("patio2"));
    carros.push(carro);
    localStorage.setItem("patio2", JSON.stringify(carros));
  }

  e.preventDefault();
}
