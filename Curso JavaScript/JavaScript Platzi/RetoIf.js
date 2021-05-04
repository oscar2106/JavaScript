var piedra=1;
var papel=2;
var tijera=3;


var num1= Math.random()*(3-1)+1;
num1 = Math.round(num1);



var funcion = function(user){

    if(user!=num1){
if(user===2 && num1===1){
    console.log("Has ganado!");
}else if(user===3 && num1===2){
    console.log("Has ganado!");
}else if(user===1 && num1===3){
    console.log("Has ganado!");
}else{
        console.log("Has perdido");
}

}else{
    console.log("Es un empate");
    }

}



if(num1===1){
    var piedrapc=1;
    } else if(num1==2){
    var papelpc=2;
    }else{
    var tijerapc=3;
    }