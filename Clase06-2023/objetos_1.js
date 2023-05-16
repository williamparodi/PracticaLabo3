//declaracion de objetos
//objeto literal 
//funcion contructora (new)
//Object.create

//tengo un objeto /*
//const obj1 = {};
//const obj2 = new Object();
//const obj3 = new Object(124); //tipo number primitivo
//const obj4 = new Object("hola");//tipo de dato indizable tambien primitivo tipo string
//const obj5 = new Object(true);

//console.log(obj4);

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
    //"3d":true,
    //"una key": "algo"
};

//console.log(miObjeto.cadena);
//console.log(miObjeto['cadena']);
//console.log(miObjeto[atributo]); //le pregunto que atributo quiere
//console.log(objeto.3d); esto no va a funcionar porque no esta como variable.
//console.log(objeto["3d"])// asi asi 

const entradas = Object.entries(miObjeto);

// recorro el array de entries
for(let i = 0; i< entradas.length;i++)
{
    let [key,value] = entradas[i];
    console.log(key,"=",value);
    //console.log(entradas[i][0], "=" , entradas[i][1]);//las comas en el console log lo concatena 
}

entradas.forEach(entrada => 
{
    let [key,value] = entradas;
    console.log(key,"=",value);
});
console.log("***************************");

for (const entradas of entradas)
{
    let [key,value] = entradas;
    console.log(key,"=",value);
}
console.log("***************************");

// O esta forma por si necesito 
for(const entrada of entrada)
{
    console.log(entrada[0],"=",entrada[1]);
}
console.log("***************************");

const keys = Object.keys(miObjeto);
const valores = Object.values(miObjeto);

for(i=0;i<key.length;i++)
{
    console.log(keys[i], "=" , miObjeto[keys[i]]);
}

console.log("***************************");
for(const key of keys)
{
    console.log(key,"=", miObjeto[key]);
}

console.log("***************************");
keys.forEach((key) => 
{
    console.log(key,"=", miObjeto[key]);
});
console.log("***************************");

const personas = {
    pepe:{
        nombre:"Jose",
        edad:30
    },
    andrea:{
        nombre:"lala",
        edad:40
    }
};

