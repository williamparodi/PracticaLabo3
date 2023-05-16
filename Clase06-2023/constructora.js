/*
function Persona(nombre,edad)
{
    obj = {};
    obj.nombre = nombre;
    obj.edad = edad;
    obj.saludar = function(){
        console.log("Hola");
    };

    return obj;
}

const per1 = Persona("Juan",34);
const per2 = Persona("Veronica",23);

console.log(per1);*/

// se usa asi : porque es propio de persona el prototype
function Persona(nombre,edad)
{
    this.nombre = nombre;
    this.edad = edad;
    let sexo = "";

    this.getSexo = function()
    {
        return sexo;
    };
    this.setSexo = function(value)
    {
        sexo = value;
    };
}

// de esta manera todas las instancias comparten el mismo objeto(aca es la funcion saludar)
Persona.prototype.saludar = function (){
    console.log("hola");
};

Persona.prototype.presentarse = function(gusto,otroGusto){
    console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años y me gusta el helado de ${gusto} y ${otroGusto}`);
};

const per1 =new Persona("Juan",34);
const per2 =new Persona("Veronica",23);

console.log(per1);
console.log(per2);
per1.saludar("choco","sambayon");
per2.saludar("choco","fresa");

per1.setSexo("m");
console.log(per1.getSexo());

//statico??
Persona.saludar = function()
{
    console.log("hola desde Persona.saludar");
}
//aca lo llamo.
Persona.saludar();  




