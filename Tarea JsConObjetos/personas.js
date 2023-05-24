class Persona
{
    constructor(id,nombre,apellido,email,genero)
    { 
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.genero = genero;
    }
}
//let $nuevaPersona = new Persona(persona.id,persona.nombre,persona.apellido,persona.email,persona.genero);

const personas = [{"id":1,"nombre":"Wolfie","apellido":"Denson","email":"wdenson0@privacy.gov.au","genero":"Male"},
{"id":2,"nombre":"Roobbie","apellido":"Keysall","email":"rkeysall1@qq.com","genero":"Female"},
{"id":3,"nombre":"Mervin","apellido":"Collington","email":"mcollington2@tamu.edu","genero":"Male"},
{"id":4,"nombre":"Scottie","apellido":"Srutton","email":"ssrutton3@tamu.edu","genero":"Male"},
{"id":5,"nombre":"Aidan","apellido":"Havvock","email":"ahavvock4@netvibes.com","genero":"Female"},
{"id":6,"nombre":"Delphinia","apellido":"Brownlow","email":"dbrownlow5@zdnet.com","genero":"Female"},
{"id":7,"nombre":"Gabi","apellido":"Flemming","email":"gflemming6@angelfire.com","genero":"Genderqueer"},
{"id":8,"nombre":"Hirsch","apellido":"Inman","email":"hinman7@bbc.co.uk","genero":"Male"},
{"id":9,"nombre":"Parnell","apellido":"Atherton","email":"patherton8@skyrock.com","genero":"Male"},
{"id":10,"nombre":"Yorke","apellido":"Stent","email":"ystent9@hao123.com","genero":"Male"}];

localStorage.setItem("lista",JSON.stringify(personas));

const listaPersonas = JSON.parse(localStorage.getItem("lista"));

function crearTabla(lista)
{   
    //Etiquetas
    const $tabla = document.createElement("table");
    const $thead = document.createElement("thead");
    const $datos = document.createElement("tr");
    const $body = document.createElement("tbody");
    const $nombresColumna = Object.keys(lista[0]);
    const fragmento = document.createDocumentFragment();

    $nombresColumna.forEach((elemento) => 
    {
        const $columna = document.createElement("th");
        $columna.textContent = elemento;
        $datos.appendChild($columna)//agrego esos datos del th al tr
        $thead.appendChild($datos)//agrego el tr al thead
        fragmento.appendChild($thead)//final agrego el thead al fragmento
    });

    lista.forEach((persona)=>
    {
        const $fila = document.createElement("tr");//creo un tr por cada persona
        $body.appendChild($fila)//y la sumo al tbody

        $nombresColumna.forEach((el)=>
        {
            const $valor = document.createElement("td");//creo un td por cada valor
            $valor.textContent = persona[el];
            $fila.appendChild($valor);
            fragmento.appendChild($body);
        });
    });
    $tabla.appendChild(fragmento);
    return $tabla;
}

const cuerpo = document.querySelector(".tabla");
const tablita = crearTabla(listaPersonas);
cuerpo.appendChild(tablita);
