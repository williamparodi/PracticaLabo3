const formulario = document.forms[0];

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();//manejo el evento como el handler
    console.log("datos ingresados");
});