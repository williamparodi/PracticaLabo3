/*for (const key in miObjeto)
{
    console.log(key, "=", )
}*/

const persona ={
    nombre : "Juan",
    edad: 56,
    saludar: function(){
        console.log("hola mundo");
    },
    presentarse(){
        console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad}`);
    },
}

console.log(persona);

persona['sexo'] = "M";// agrego atributo 

persona.localidad ="Avellaneda"; // agrego

persona.saludar();// accedo al metodo 
persona.presentarse();//accedo a otro metodo
console.log(persona.nombre);