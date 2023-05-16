class Animal
{
    constructor(tipo,edad,sexo){
        this.tipo = tipo;
        this.edad = edad;
        this.sexo = sexo;
    }
    /*
    setEdad(value)
    {
        this.edad = value;
    }

    getEdad()
    {
        return this.edad;
    }*/

    get Edad()
    {
        return this.edad;
    }

    set Edad(value)
    {
        this.edad = value;
    }

    saludar()
    {
        console.log(`Hola, soy un animal de tipo ${this.tipo}, de sexo ${this.sexo} y tengo ${this.edad} años`);
    };

    cagar()
    {
        console.log("Soy un animal y cago donde quiero");
    };

    static saludarEstatico()
    {
        console.log("Soy un animal estatico");
    }
}

class Mascota extends Animal
{
    constructor(nombre,tipo,edad,sexo,vacunado){
        super(tipo,edad,sexo);
        this.nombre = nombre;
        this.vacunado = vacunado;
    }

    sonar(sonido)
    {
        console.log(sonido);
    }

    saludar()
    {
        console.log(`Hola, soy una mascota,me llamo 
        ${this.nombre}, de tipo de sexo ${this.sexo},tengo ${this.edad} años y, ${this.vacunado ? " estoy vacunado" : "no estoy vacunado"}`
        );//alt+96 back tick o altgr+}
    };
}

// const animal = new Animal("vaca",4,"femenino");

// console.log(animal);

//Llamo al metodo estatico
//Animal.saludarEstatico();
const mascota = new Mascota("miguelito","raton",4,"M",false);
mascota.Edad = 7;

console.log(mascota);
console.log(mascota.Edad);
