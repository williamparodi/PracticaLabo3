
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
            
                if(typeof a === "number")
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

function multiplicar(a,b)
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

console.log("fin");

//promise hell
function calcular(a,b)
{
    sumar(a,b)
    .then((suma)=>cuadrado(suma))//me retorna una promesa 
    .then((cuad)=>multiplicar(cuad,10))// se puede omitir los parantesis por arrow function 
    .then((producto)=>restar(producto,2))
    .then((resta)=>informar(resta))
    .catch((err)=>console.log(err)); 
}
//esto rompe el promise hell el async me deja usar un await es el encargado de mandar si es rejected al catch
async function calcularX(a,b)
{
    try 
    {
        let suma = await sumar(a,b);
        let cuad = await cuadrado(suma);
        let producto = await multiplicar(cuad,10);
        let resta = await restar(producto,2);
        informar(resta);
    } 
    catch (error) 
    {
        console.log(error);
    }

}
calcularX(5,8);

// funcion expresada  se usa en la actualidad
const calcularX2 = async (a,b) =>
{
    try 
    {
        let suma = await sumar(a,b);
        let cuad = await cuadrado(suma);
        let producto = await multiplicar(cuad,10);
        let resta = await restar(producto,2);
        informar(resta);
    } 
    catch (error) 
    {
        console.log(error);
    }
}

calcularX2(5,8);
