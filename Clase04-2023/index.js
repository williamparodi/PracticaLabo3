function saludar()
{
    console.log("Hola");
}
/*
var sumar = function(a , b)// funcion expresada, igual es eclipsada.
{
    return a+b;
}*/

import { sumar } from "./matematicas.js";// de donde lo importo
console.log(sumar(4,5));
console.log(matematicas.sumar(4,5));