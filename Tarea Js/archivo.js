/*obtengo un array de objetos persona en json ,
 luego armar una funcion que devuelva una tabla en html, 
 construyendo headers de cada columna en base a las keys o propiedades de los objetos que obtengo del json .
 cada row tengo que insertala con fragmet.
*/

const personas=[
  {"id":1,"first_name":"Ninon","last_name":"Doy","email":"ndoy0@dagondesign.com","gender":"Female"},
  {"id":2,"first_name":"Evaleen","last_name":"Redgrove","email":"eredgrove1@delicious.com","gender":"Female"},
  {"id":3,"first_name":"Allsun","last_name":"Avrahamian","email":"aavrahamian2@independent.co.uk","gender":"Female"},
  {"id":4,"first_name":"Lauren","last_name":"Goosnell","email":"lgoosnell3@myspace.com","gender":"Male"},
  {"id":5,"first_name":"Virge","last_name":"Chesshire","email":"vchesshire4@networksolutions.com","gender":"Male"},
  {"id":6,"first_name":"Jamison","last_name":"Ciobutaru","email":"jciobutaru5@senate.gov","gender":"Male"},
  {"id":7,"first_name":"Clarence","last_name":"Jordine","email":"cjordine6@unesco.org","gender":"Male"},
  {"id":8,"first_name":"Hadlee","last_name":"Tweedie","email":"htweedie7@reference.com","gender":"Genderfluid"},
  {"id":9,"first_name":"Gaston","last_name":"Sesons","email":"gsesons8@nih.gov","gender":"Male"},
  {"id":10,"first_name":"Craggie","last_name":"Barthelmes","email":"cbarthelmes9@nbcnews.com","gender":"Male"}];
  
let listaPersonas = [];
localStorage.setItem("listaPersonas",JSON.stringify(personas));

if(localStorage.getItem("listaPersonas"))
{
    listaPersonas = [...JSON.parse(localStorage.getItem("listaPersonas"))];// si hay algo lo traigo     
}

function crearTabla(personas)
{
    const $tabla = document.createElement("table");
    const $thead = document.createElement("thead");
    const $datos = document.createElement("tr");
    const $body = document.createElement("tbody");
    const $nombresColumna = Object.keys(personas[0]);//trae los nombres de los atributos.
    const fragmento = document.createDocumentFragment();
    fragmento.appendChild($thead);
    $nombresColumna.forEach((elemento) => {
      const $columna = document.createElement("th");
      $columna.textContent = elemento;
      $datos.appendChild($columna);
      fragmento.appendChild($datos);      
    });
    personas.forEach((persona) =>{
      const $fila = document.createElement("tr");
      $body.appendChild($fila);
      $nombresColumna.forEach((elemento)=>{
        const $valor = document.createElement("td");
        $valor.textContent = persona[elemento];
        $fila.appendChild($valor);
        fragmento.appendChild($body);
      });
    });
   
    $tabla.appendChild(fragmento);
    
    return $tabla;
}

const contenedor = document.querySelector(".tabla");
const tablita = crearTabla(listaPersonas);
contenedor.appendChild(tablita);
console.log(tablita);





