var posiciónA = parseInt(prompt("Dame la posición del edificio A"));//Recibe la posición del edificio A.
var posiciónB = parseInt(prompt("Dame la posición del edificio B"));//Recibe la posición del edificio B.
var pisoGama = parseInt(prompt("¿En que piso te encuentras Gama?"));//Recibe la posición de Gama.

//Valida que siempre se le reste al número mayor para que no salgan números negativos.
if(pisoGama > posiciónA){
  var distA = pisoGama - posiciónA;
}
else{
  var distA = posiciónA - pisoGama;
}
//Valida que siempre se le reste al número mayor para que no salgan números negativos.
if(pisoGama > posiciónB){
  var distB =pisoGama - posiciónB;
}
else{
  var distB = posiciónB - pisoGama;
}
//Valida si el edificio A es el más cercano.
if (distA < distB){
  console.log("Te queda más cerca el edificio A");
}
//Valida si el edificio A es el más cercano.
if (distB < distA){
  console.log("Te queda más cerca el edificio B");
}
//Valida cuando los elevadores le quedan a la misma distancia.
if (distA == distB){
  console.log("Los dos te quedan a la misma distancia.")
}
//Valida si el usuario ingresa otra cosa diferente a un número.
if(isNaN(posiciónA && posiciónB && pisoGama)){
  alert("Inserta algo válido por favor.");
}
