//First class es tambien un objeto 
function Animal(tipo,edad,sexo)
{
    this.tipo = tipo;
    this.edad = edad;
    this.sexo = sexo;
}

Animal.prototype.saludar = function()
{
    console.log(`Hola, soy un animal de tipo ${this.tipo}, de sexo ${this.sexo} y tengo ${this.edad} años`);
};

function Mascota(nombre,tipo,edad,sexo,vacunado)
{
    Animal.call(this,tipo,edad,sexo);//asi llamo a la funcion constructora del padre y le digo que el this es de la mascota y no de animal
    this.nombre = nombre;
    this.vacunado = vacunado;
}

Mascota.prototype.sonar = function(sonido)
{
    console.log(sonido);
}

Animal.prototype.cagar = function()
{
    console.log("Soy un animal y cago donde quiero");
}

Mascota.prototype.saludar = function()
{
    console.log(`Hola, soy una mascota,me llamo 
    ${this.nombre}, de tipo de sexo ${this.sexo},tengo ${this.edad} años y, ${this.vacunado ? " estoy vacunado" : "no estoy vacunado"}`
    );//alt+96 back tick o altgr+}
};

/*otra manera
Mascota.prototype.saludar = function()
{
    console.log(`Hola, soy una mascota,me llamo 
    ${this.nombre}, de tipo de sexo ${this.sexo},tengo ${this.edad} años y, ${"" && " estoy vacunado"}`
    );//alt+96 back tick o altgr+}
};*/


Object.setPrototypeOf(Mascota.prototype,Animal.prototype)//conecto a la mascota el protype de animal

const animal = new Animal("vaca",4,"f");
const mascota = new Mascota("miguelito","raton",4,"M",false);

console.log(animal);
console.log(mascota);

mascota.saludar();
animal.saludar();

console.clear();
mascota.sonar("Andale andale");
mascota.cagar();