function sumar (a , b)
{
    return a + b;
}

function restar (a , b)
{
    return a - b;
}

function multiplicar (a , b)
{
    return a * b;
}

function dividir (a , b)
{
    if(!validarCero(b))
    {   
        return a / b;//todas las funciones retornan algo, si no tienenn retorno retornan undefined
    }
}

function validarCero(a)
{
    return a === 0;// pregunto si es true
}

export { sumar,restar,};