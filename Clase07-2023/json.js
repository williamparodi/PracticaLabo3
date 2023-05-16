//JSON : javascript object notation
/*
const miObjeto = {
    cadena: "palabara",
    numero: 23,
    array:[2,3,4,5],
    objeto:{a:"jose",b:23,c:false},
    booleano: false,
    funcion: function()
    {
        console.log("hola mundo");
    }
};

//console.log(typeof miObjeto);//me devuelve un string con el tipo
//console.log(typeof objeto_string);//me devuelve un string con el tipo

//comvierto al objeto al formato json 
//const objeto_string = JSON.stringify(miObjeto);//pasa a json un objeto.Es lo mas facil para serializar esta en string

//parseo el json a objeto nuevamente
//const otroObjeto = JSON.parse(objeto_string);*/

const persona = {
nombre : "Juan",
edad: 34,
email: "juancho@gmail.com",
sexo: "M",
vacunado: true,
};

const personas = [{
    nombre : "Juan",
    edad: 34,
    email: "juancho@gmail.com",
    sexo: "M",
    vacunado: true,
    },
    {
        nombre : "Juanita",
        edad: 20,
        email: "juanita@gmail.com",
        sexo: "F",
        vacunado: true,
    }]





//localStorage.setItem("persona",JSON.stringify(persona));

//const persona2 = JSON.parse(localStorage.getItem("persona")); //lo convierto otra vez a objeto.
//console.log(persona2);

localStorage.setItem("listaPersonas",JSON.stringify(personas));

//localStorage.removeItem("listaPersonas");borra el elemento elegido
//localStorage.clear(); //borra todo el localstorage;
let listaPersonas = [];

if(localStorage.getItem("lisatPersonas"))
{
    listaPersonas = [...JSON.parse(localStorage.getItem("listaPersonas"))];// si hay algo lo traigo     
}

console.log(listaPersonas);



