function ninja(nombre){
    this.nombre = nombre
    this.vida = 100;

    var velocidad = 3;
    var fuerza = 3;
   
    this.sayName = function (){
        console.log("El nombre de mi ninja es " + this.nombre);

    };
    this.showStats = function (){
        console.log("Nombre: " + this.nombre + ", vida: " + this.vida + ", velocidad: " + velocidad + ", fuerza: " + fuerza + "");
    };
    this.drinkSake = function (){
        this.vida += 10;
        console.log("Se aumenta la vida en 10: " + this.vida);
    };
}

var ninja1 = new ninja("Hyabusa");
ninja1.sayName();
// -> "El nombre de mi ninja es Hyabusa"
ninja1.showStats();
// -> "Nombre: Hayabusa, vida: 100, velocidad: 3, fuerza: 3"
ninja1.drinkSake();