
const persona = {
    nombre: "Juan",
    edad:30,
    saludar: function(gusto,otroGusto){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años y me gusta el helado de ${gusto} y ${otroGusto}`);
        console.log(this);
    },
    despedir: () =>{
        console.log("Estoy en despedir");
        console.log(this);
    }
    // es del mismo scoop del padre
};
/*
persona.saludar();
persona.despedir();

function ejecutora(callback)
{
    callback();
}

const saludar = persona.saludar //guarda el metodo saludar de persona en una variable constane saludar

saludar();// ya la llamo del scoop global se des referencia del de persona. va a ser indefined

//recibe una funcion y el tiwempo en mili segundos
setTimeout(persona.saludar,5000);

ejecutora(() =>{
persona.saludar()// no se desreferencia es el this de persona
});

setTimeout(() =>{
persona.saludar();
},5000);*/

const mascota = {
    nombre:"colita",
    edad:3
}

const saludar2 =persona.saludar;// meto la funcion de persona en una variable 

saludar2.call(mascota);// me sirve para decirle por afuera que tiene su propio this
saludar2.call(persona);// me sirve para decirle por afuera que tiene su propio this
persona.saludar("frutilla","sambayon");
saludar2.call(persona,"pistacho");
saludar2.apply({nombre:"pepe",edad:25},["vainlla","Menta"]);

const saludarMascota = saludar2.bind(mascota);//pego saludar a mascota 

saludarMascota("Crema","banana split");