var numpalabra= prompt("¿Cuantas letras tiene tu palabra?");
var letras = [];
var letras2 = [];
var correcto = 0;
var incorrecto = 0;

for(i=0; i<numpalabra; i++){
    var letra = prompt(`Escribe la letra ${(i + 1)}`);
    letras.push(letra);

};

for(i=(numpalabra-1); i>=0; i--){
    letras2.push(letras[i]);

};


for(i=0; i<numpalabra; i++){
    
    if(letras[i]!=letras2[i]){
        incorrecto++;
    }else{
        correcto++;
    }

};

if(correcto==numpalabra){
    alert("La palabra es polindroma");
}else{
    alert("La palabra no es polindroma");
};
