var autos=[];

function auto(marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

for( var i=0; i<3; i++){
    var marca = prompt("Ingresa marca del auto");
    var modelo = prompt("Ingresa modelo del auto");
    var año = prompt("Ingresa año del auto");
    autos.push(new auto(marca, modelo, año));
}

for(i=0; i<autos.length; i++){
    console.log(autos[i]);
}