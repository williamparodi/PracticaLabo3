//import {personas} from "../data/lista.js";
//import {personas as people} from "../data/lista.js";
import {actualizarTabla} from "../js/tabla.js";

//import {crearTabla} from "../js/tabla.js";
import {Persona} from "../persona.js";

//ees mas eficiente no tira eventos en vano 
window.addEventListener("click",(e) =>
{
   if(e.target.matches("td"))//si el emisor del evento matchea con una td
   {
        //const id = e.target.parentElement.getAttribute("data-id");
        const id = e.target.parentElement.dataset.id;
        console.log(id);

        const selectedPersona = personas.find((per)=> per.id == id); //voy a tener la persona q selecciono es una arrow function
            //return per.id == id;
        
        //console.log(selectedPersona);
        cargarFormPersona($formulario,selectedPersona);
   }
   else if(e.target.matches("input[value='Eliminar Persona']"))
   {
        console.log("eliminar");//podria usar una ventana confirm
        const id = parseInt($formulario.txtId.value);
        handlerDelete(id);
   }  
   
});

//localStorage.setItem("personas",JSON.stringify(people));
const personas = JSON.parse(localStorage.getItem("personas")) ||[]; //si devuelve null, devuelvo array vacio
const $seccionTabla = document.getElementById("tabla");
const $formulario = document.forms[0];// o getElementById

//si existe actualiza
if(personas.length)
{
    actualizarTabla($seccionTabla,personas);
}


//cargo el form y proceso el conytenioda
$formulario.addEventListener("submit",(e)=>
{
    e.preventDefault();//aborta el comportamiento por defecto
    console.log("Enviando*****");
    //podria validar antes de esto
    const {txtId,txtName,txtEdad,txtEmail,rdoGenero} = $formulario;//tiene atributos los nombres de los botones,etc

    if(txtId.value === "")//va a ser persona nueva
    {
        //personanueva
        console.log("Nueva");
        const newPersona = new Persona(Date.now(),txtName.value,parseInt(txtEdad.value),txtEmail.value,rdoGenero.value);
        handlerCreate(newPersona);
    }
    else
    {
        //modificar/Update persona
        console.log("update");
        const updatedPersona = new Persona(parseInt(txtId.value),txtName.value,parseInt(txtEdad.value),txtEmail.value,rdoGenero.value);
        handlerUpdate(updatedPersona);
    }

    $formulario.reset();//limpo el form 
    
});

function handlerCreate(nuevaPersona)
{
    personas.push(nuevaPersona);//agrego al array 
    //$seccionTabla.appendChild(crearTabla(personas,"coral"));
    actualizarStorage("personas",personas);
    actualizarTabla($seccionTabla,personas);
}

function handlerUpdate(editPersona)
{
    let index = personas.findIndex((per)=> per.id == editPersona.id);//encuentra la direccion

    //piso la persona a editar con los datos nuevos
    personas.splice(index,1,editPersona);//corta y emboca la modificada
    //podria hacer un sort para acomodar
    actualizarStorage("personas",personas);
    actualizarTabla($seccionTabla,personas);
}

function handlerDelete(id)
{
    let index = personas.findIndex((per)=> per.id == id);//encuentra la direccion

    personas.splice(index,1);// al no pasarle a nadie el splice lo elimina

    actualizarStorage("personas",personas);
    actualizarTabla($seccionTabla,personas);
    $formulario.reset(); 
}

function actualizarStorage(clave,data)
{
    localStorage.setItem(clave,JSON.stringify(data));
}


function cargarFormPersona(formulario,persona)
{
    formulario.txtId.value = persona.id;
    formulario.txtName.value = persona.nombre;
    formulario.txtEdad.value = persona.edad;
    formulario.txtEmail.value = persona.email;
    formulario.rdoGenero.value = persona.genero;
    
}