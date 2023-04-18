
function saludar()
{
    alert("Hola mundo");
}

/*
function handlerClick()
{
    alert('Hola mundo');
}
*/
/*const boton = document.getElementById("btnSaludo");
 Me devuelve la direccion de memoria del boton, elemento nodo.
 En este caso me devuelve NUll,que es un tipo de direccion de memoria, 
es la no direccion de memoria, porque hasta ese momento no tengo declarado en el html
el boton, estaba mas abajo*/

/*boton.addEventListener("click", handlerClick);
 click nombre del evento y segundo parametro la funcion puntero a funcion o sea el nombre de la funcion
Cuando este objeto lance el evento "click" yo ejecuto el evento "handlerclick"
objeto guarda la memoria que consiguio el malloc.   
*/

/*Esto va a hacer que se ejecute cuando la pagina se cargue y meto funciones lambda
o anonima porque solo voy a usarla aca y no necesita nombre y va a ser atrapada por el 
evento por parametro de addEventListener*/
window.addEventListener("load",function()// cuando la pagina se carga agarro la referencia
{
    document.getElementById("btnSaludo").addEventListener("click", function(){ //funcion lamda la atrapa el parametro formal del addventListener.
        alert("Hola mundo");
    });
});


