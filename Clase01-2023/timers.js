
function saludar()
{
    alert("Hola mundo!!");
}

/*le paso la direccion de memoria de la funcion saludar,puntero a funcion*/
//setTimeout(saludar,5000);
//a los 5 segundos ejecuta saludar

//parametro actual,literal de funcion, funcion anonima es no bloqueante
setTimeout(function(){
    alert("Hola mundo!!");
},5000); // es un callback

//esto va a los webapis y vuelve por el callback queue al stack.asi sea 0 segundos

/*anotaciones de como funciona cuando asignamos
function miFuncion()
{
    console.log("Hola");
}

//se transforma en un puntero a funcion.
var pepe = miFuncion();

miFuncion();
pepe();

//funcion expresada
var despedir = function(){
    console.log("Chau mundo")
}
*/

/*Tengo un solo array apuntado por dos variables
let vec = [1,2,3,4,5];
let vec2 = vec;

console.log(vec)
console.log(vec2);

vec[0] = 100;

console.log(vec)
console.log(vec2);
*/

const vec1 = [1,2,3,4];// cuando quiero matener la dire de memoria y no cambiarla 
const vec3 = [...vec1]; //los tres puntos es el operador de propagacion(split operator), copia el valor de uno en otro

console.log(vec1);
console.log(vec3);






