const formulario = document.forms[0];//referencia al form
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    //manejo el evento como el handler
    //desactivo el comportamiento por defecto y atrapo el evento

    //aca podemos levantar la info ,validar ,etc

    console.log("datos ingresados");
});


//el keydouwn evito q aprete el cliente el teclado podria limitar las letras etc.
document.getElementById("txtNombre").addEventListener("keydown",(e) => {
    e.preventDefault();
    console.log(e);
});