//una funcion es un ciudadano de primera clase
// Estas funciones son objetos 

const sumar = function(a,b)
{
    return a + b;
};

console.log(sumar(2,3)); //5

//se puede pasar como argumento a una funcion 

function operar(a,b,operacion)
{
    return operacion(a,b);
};

console.log(operar(2,3,sumar));

// se puede retornar como resultyado de ejecutar una funcion

function crearSumador(a)
{
    return function(b)
    {
        return a+b;
    };
}

// es una variable que le asigno una funcion 
const sumarDos = crearSumador(2);

console.log(sumarDos(3));//5