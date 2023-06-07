
/*recibe por param un callback*/ 
function sumar(a,b,callback)
{
    let rta;
    setTimeout(() =>{
        try 
        {
            if(typeof a === "number" && typeof b === "number")
            {
                rta = a+b;
                console.log("La suma es " + rta);
                callback(rta);
            }
            else
            {
                throw Error ("PArametros invalidos");//tiro error directo 
            }   
        }
        catch(error)
        {
            console.log(error.message);
        }
        //es un operador unario, opera al unico que tiene a la derecha va devolver lo que sea a
        
    },2000);
}

function cuadrado(a,callback)
{
    let rta;
    setTimeout(() =>{
        rta = a*a;
        console.log("El cuadrado es :"+ rta);
        callback(rta);
    },1500);
}

function multiplicar(a,b,callback)
{
    let rta;
    setTimeout(() =>{
        rta = a*b;
        console.log("La multi es :"+ rta);
        callback(rta);
    },1000);
}

function restar(a,b)
{


    return a-b;
}

function informar(valor)
{
    console.log("El resultado es : "+valor);
}

console.log("Inicio");

//llamada de la funcion 
//le paso un callback, una funcion

sumar(5,8, (suma)=>{

    cuadrado(suma,(cuad)=>{
        multiplicar(cuad,10,(producto)=>{
            restar(producto,2,(resta)=>{
                informar(resta);
            });
        } );
    });
});


/*
let suma = sumar(5,8);
let cuad = cuadrado(suma);
let producto = multiplicar(cuad,10);
let resta = restar(producto,2);*/

/*informar(resta);*/

console.log("fin");

