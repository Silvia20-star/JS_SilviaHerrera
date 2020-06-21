function getDivisor(número, div){
  let i = 2;//Comenzamos con el 2 porque es el primer número primo.
//Divisores que sean números primos.
  while (i < número && número % i !== 0){//Si el número es mayor a 2 y su módulo es diferente de 0.
    i++;
    if (Math.sqrt(número) <i ) {
      i = número;
    }
  }

  if (div.indexOf(i)=== -1){
    div.push(i);
  }

  if (número/i !== 1) getDivisor(número/i, div);
  return div;
}
//Valida si no se inserta un número mayor a 1.
let aviso = prompt("Inserte un número mayor a 1 por favor.");
let div=[];
//Valida si se ingresa un número, si es así, se realiza el código.
if(!isNaN(aviso) && aviso > 1)
  console.log(getDivisor(Number.parseInt(aviso), div));
else//Valida si se ingresa algo diferente a un número.
  alert("Inserta algo válido por favor.");
