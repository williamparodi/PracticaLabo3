new Promise((resolve,reject)=>{



});



//funcion asincrona, si retono un bool o lo que sea es sincronica y bloqueante esta no 
function validarPar(valor)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            if(typeof valor !== "number")
            {
                reject("Eso no es un numero");
            }
            else
            {
                mensaje = "no es par";
                if(valor %2 == 0)
                {
                    mensaje="Es par";
                }
                resolve(mensaje);
            }
        },2000);       
    });

}

console.log("inicio");

//esto retorna una promesa y uso el metodo then
validarPar("2")
.then((res)=>{//aca llega el resolve
    console.log(res);
})
.catch((err)=>{//el reject llega aca 
    console.log(err);
})  

console.log("fin");