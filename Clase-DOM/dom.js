/*console.log(document);
console.log(document.body);
console.log(document.links)//un html coleccion con todos los links en el documento 
//es iterable a travez de indice
console.log(document.forms);
console.log(document.styleSheets);//referencia a los style de la pagina
//Arbol del dom es un conjunto de objetos

//metodos para seleccionar elementos todo lo que empieza con doc es del dom 
const $parrafo = document.getElementById("parrafo1");//tiene prioridad ante el query,es mejor para encontrar por id

console.log($parrafo);
console.log(document.getElementsByClassName("tarjeta"));
console.log(document.getElementsByName("nombre"));//esto tiene foreach
console.log(document.getElementsByTagName("a"));//trae los elementos con html colecction

//ahora se usa solo el getElemntBYId y query selector y query selectorall

console.log(document.querySelector("a"));//trae un elemento html
console.log(document.querySelectorAll("id"));//trae todos los elementos de la pagina
console.log(document.querySelectorAll(".tarjeta"));//trae la clase, un node list 
console.log(document.querySelectorAll("ul"));//trae un li
console.log(document.querySelectorAll("ul a"));//trae todos las elementos a dentro de una lista ordenada


//Atributos
const $parrafo = document.getElementById("parrafo1");//tiene prioridad ante el query,es mejor para encontrar por id

// se puede usar getter y setters o notacion de puntosç
//setAtribute getatributte , removeAtribute , hasAtribute
const $txtNombre = document.getElementsByName("nombre")[0];

//console.log($txtNombre.getAttribute("placeholder"));
//$txtNombre.setAttribute("placeholder","write your name");// le doy valor que quierp
$txtNombre.placeholder = "write your name";//tambien seteo
console.log($txtNombre.hasAttribute("placeholder"));//me dice si esta seteado
$txtNombre.removeAttribute("placeholder");//borro el atribute
console.log($txtNombre.getAttribute("placeholder"));
const $lista = document.querySelector("h2");

console.log($lista.dataset.data-description);// si trabajo con setter y getter
console.log($lista.getAttribute("data-description"));
$lista.dataset.description = "lista Y";*/

//Estilos
/*
const $tarjeta1 = document.querySelector(".tarjeta");

//console.log($tarjeta1);

//$tarjeta1.style.backgroundColor = "red";// eñ
$tarjeta1.setAttribute("style", "background-color:red");
$tarjeta1.style.setProperty( "background-color","red");// eñ

//console.log($tarjeta1.style.getPropertyValue("color"),"algo");// solo estilos inline

console.log($tarjeta1.classname);
// class list tiene los metodos .add .remove .toggle .contains .replace
$tarjeta1.classList.add(".rotar-45", "sepia");// de una se lo paso 
console.log($tarjeta1.classList.contains(".rotar-45"));// me dice si contiene la class
$tarjeta1.classList.remove(".rotar-45");
$tarjeta1.classList.toggle(".rotar-45");// le agrega si no la tiene o la saca si la tiene
$tarjeta1.classList.replace(".rotar-45" ,".rotar-120");// cambia la class 45 por la 120*/

//TExto Pripedades innerText textcontent innerhtml y outerHTML
//innerText no es standar
//const $parrafo = document.getElementById("parrafo1");//tiene prioridad ante el query,es mejor para encontrar por id
//console.log($parrafo);
/*
$parrafo.textContent = "Esto o rellene desde js";// no interpreta html
$parrafo.innerHTML = "<mark>esto lo rellene desde js<mark>";//interpreta html
$parrafo.outerHTML = <p><mark>ldasddasd</mark></p>;//son para mostrar en html no se usa mucho */

//desde js afecto desde document al elemento que me vienen del arbol de nodos
// creo un objeto y lo construyo en memoria , escribo el puntero al objeto 
// inyecte un elemento imagen desde el DOM 
/*
const $newTarjeta = document.createElement("figure"),
$imagen = document.createElement("img"),
$fig = document.createElement("figcaption"),
texto = document.createTextNode("Any");// un nodo texto es el texto literal 

$newTarjeta.classList.add("tarjeta");
$imagen.setAttribute("src","http://placeimg.com/200/200/any");
$imagen.setAttribute("alt","cualquiera");

$newTarjeta.appendChild($imagen);// engachamos un hijo a tarjeta 
$newTarjeta.appendChild($fig);
$fig.appendChild(texto);

const $seccionImagenes = document.querySelector(".imagenes");

$seccionImagenes.appendChild($newTarjeta);

const $listaFrutas = ["banana","manzana","pera","melon","sandia"];
$listaFrutas = document.getElementById("li");

const fragmento = document.createDocumentFragment();//si $ no forma parte de la grafica

listaFrutas.forEach((el)=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    fragmento.appendChild($li);
});

$listaFrutas.appendChild(fragmento);
//una vez armado se inyeccta todo de una, sirve para construir una tabla 
*/

const $imagenes = document.querySelector(".imagenes");
let tarjeta1 = $imagenes.firstElementChild;
console.log($imagenes.children);//todos los que contiene nodos hijos
console.log($images.firstElementChild);
console.log($images.lastElementChild);
console.log($imagenes.children);//todos los que contiene nodos hijos

do// mientras el siguiente hermano de la tarjeta no sea null
{
    tarjeta1 = tarjeta1.nextElementSibling;
    console.log(tarjeta1);
    if(tarjeta1 == null)break;
}while(tarjeta1.nextElementSibling);

//conseguimos de mockaroo un array persona como json y lo pasamos a objeto array y se lo tiramos a una funcion y que de una tabla y lea una key 
//funcion gererar tabla que  reciba un aray de elementos y retorma y que se vea en pantalla una tabla 