/* //<-- EJERCICIO Nº3 -->

function multiplicar(){
	baseImponible = document.getElementById("BaseImponible").value;
	iva = document.getElementById("Iva").value;
	resultado = parseFloat(baseImponible)+ parseFloat(baseImponible*(iva/100));
	document.getElementById("Total").value = resultado;
	} */

/* //<-- EJERCICIO Nº4 -->

let nombre = "Lucas";
console.log(nombre);
let apellido = "Ramirez";
console.log(apellido);
let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
let nombreCompletoMayusculas = nombreCompleto.toUpperCase();
console.log(nombreCompletoMayusculas);
let nombreCompletoMinusculas = nombreCompletoMayusculas.toLowerCase();
console.log(nombreCompletoMinusculas);
let ultimaLetraNombre = nombre.charAt(nombre.length-1);
console.log(ultimaLetraNombre);
let primeraLetraApellido = apellido.charAt(0);
console.log(primeraLetraApellido);
let fraseConEspacios = ` Hola esta es una frase con espacios `
console.log(fraseConEspacios);
let fraseSinEspacios = fraseConEspacios.trim();
console.log(fraseSinEspacios);
let frasePosicion = fraseSinEspacios.indexOf("frase");
console.log(frasePosicion); */

//<-- EJERCICIO Nº5 -->

let arrayNumerico = [5 , 3 , 5 , 9 , 7 , 10];
let suma = 0;
for (i=0; i<arrayNumerico.length; i++){
	suma += (arrayNumerico[i]);
}
console.log(suma);
