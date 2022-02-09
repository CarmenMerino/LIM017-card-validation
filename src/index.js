import validator from "./validator.js";
let txtTarjeta = document.getElementById("txtTarjeta");
let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", validarTarjeta);
function validarTarjeta() {
  let numeroTarjeta = txtTarjeta.value;
  console.log("el numero a verificar es", numeroTarjeta)
  let esValido = validator.isValid(numeroTarjeta);
  if (esValido == true) {
    document.getElementById("pagina1").className = "oculto";
    document.getElementById("pagina2").className = "visible";
  } else {
    document.getElementById("pagina1").className = "oculto";
    document.getElementById("pagina3").className = "visible";
  }
}
function enmascarar() {
  let numeroTarjeta = txtTarjeta.value;
  console.log("el numero a enmascarar es", numeroTarjeta)
  let mascara = validator.maskify(numeroTarjeta);
  let resultadoTarjeta = document.getElementById("resultadoTarjeta1")
  resultadoTarjeta.innerHTML=mascara
}
btnValidar.addEventListener("click", enmascarar);

function enmascarar2() {
  let numeroTarjeta = txtTarjeta.value;
  let mascara = validator.maskify(numeroTarjeta);
  let resultadoTarjeta = document.getElementById("resultadoTarjeta2")
  resultadoTarjeta.innerHTML=mascara
}
btnValidar.addEventListener("click", enmascarar2);
