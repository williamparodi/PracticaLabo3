
/*recibe por param un callback*/ 
function sumar(a,b)
{
    return new Promise((resolve,reject)=>
    {

        setTimeout(() =>{
            
                if(typeof a === "number" && typeof b === "number")
                {
                    let rta = a+b;
                    console.log("La suma es " + rta);
                    resolve(rta);
                }
                else
                {
                    reject("Parametros invalidos");//tiro error directo 
                }           
        },2000);
    });
}

function cuadrado(a)
{
    return new Promise((resolve,reject)=>
    {

        setTimeout(() =>{
            
                if(typeof a === "number" && typeof b === "number")
                {
                    let rta = a*a;
                    console.log("El cuadrado es " + rta);
                    resolve(rta);
                }
                else
                {
                    reject("Parametros invalidos");//tiro error directo 
                }           
        },1500);
    });
}

function multiplicar(a)
{
    return new Promise((resolve,reject)=>
    {

        setTimeout(() =>{
            
                if(typeof a === "number" && typeof b === "number")
                {
                    let rta = a*b;
                    console.log("La multi es " + rta);
                    resolve(rta);
                }
                else
                {
                    reject("PArametros invalidos");//tiro error directo 
                }           
        },1000);
    });
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

sumar(5,8)
.then((suma)=>cuadrado(suma))//me retorna una promesa 
.then((cuad)=>multiplicar(cuad,10))// se puede omitir los parantesis por arrow function 
.then((producto)=>restar(producto,2))
.then((resta)=>informar(resta))
.catch((err)=>console.log(err));

console.log("fin")
