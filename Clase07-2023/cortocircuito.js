
function miFuncion()
{
    numero = 1
    console.log("se equivoco");
}

if(false && miFuncion())//operador de circuito al ser false ni ejecuta la funcion y entra al else
{
    console.log("if");
}
else
{
    console.log("else");
}

if(false & miFuncion())//es sin corto y ahora ejecuta la funcion y entra else
{
    console.log("if");
}
else
{
    console.log("else");
}