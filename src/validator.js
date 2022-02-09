const validator = {
  isValid(numeroTarjeta) {
    /*pasar una cadena a un array con split y convertir a números*/
    let newArray = numeroTarjeta.split("").map(Number);
    /* invertir el array con la función reverse ()*/
    let invertir = newArray.reverse();
    /*doblar el valor de números pares */
    for (var i = 1; i < invertir.length; i += 2) {
      let elementoPar = invertir[i] * 2;
      if (elementoPar > 9) {
        elementoPar = elementoPar - 9;
      }
      invertir[i] = elementoPar;
    }
    /*Sumar los dígitos y dividir entre 10*/
    let total = 0;
    for (var a = 0; a < invertir.length; a++) {
      total += invertir[a];
    }
    if (total % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify(numeroTarjeta) {
    let numeroOculto = [];
    for (let e = 0; e<numeroTarjeta.length; e++) {
      if (e < numeroTarjeta.length - 4) {
        numeroOculto.push("#");
      } else {
        numeroOculto.push(numeroTarjeta[e]);
      }
    }
    return numeroOculto.join('');
  },
};
export default validator;
