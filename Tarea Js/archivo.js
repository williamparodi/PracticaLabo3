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
  
    $nombresColumna.forEach((elemento) => {
      const $columna = document.createElement("th");//creo un th para cada columna id,nombre, etc 
      $columna.textContent = elemento; 
      $datos.appendChild($columna);//agrego esos datos al tr
      $thead.appendChild($datos);//agrego el tr al thead
      fragmento.appendChild($thead);//agrego thead al fragmento      
    });

    personas.forEach((persona) =>{ 
      const $fila = document.createElement("tr");//creo una fila ,un tr por persona
      $body.appendChild($fila);//sumo al tbody una fila
      $nombresColumna.forEach((elemento)=>{ 
        const $valor = document.createElement("td");// creo un td con los valores 
        $valor.textContent = persona[elemento]; //cada valor de cada elemento
        $fila.appendChild($valor); //sumo el valor a la fila
        fragmento.appendChild($body); //agrego el body al framento
      });
    });
    
    $tabla.appendChild(fragmento);// agrego el fragmento a la tabla que contiene todo
    
    return $tabla;
}

const contenedor = document.querySelector(".tabla");// uso el query
const tablita = crearTabla(listaPersonas);
contenedor.appendChild(tablita);
console.log(tablita);





