/*var piedra=1;
var papel=2;
var tijera=3;*/

var num = Math.random()*(3-1)+1;
num = Math.round(num);

var funcion = function(user){
    switch(user){
        case 1: if(num===1){
            console.log("Empate");
        }else if(num===2){
            console.log("Has perdido!");
        }else{
            console.log("Has ganado!");
        }
        break;

        case 2: if(num===1){
            console.log("Has ganado!");
        }else if(num===2){
            console.log("Empate");
        }else{
            console.log("Has perdido!");
        }
        break;

        case 3: if(num===1){
            console.log("Has perdido!");
        }else if(num===2){
            console.log("Has ganado!");
        }else{
            console.log("Empate");
        }
        break;

    }

}


/*if(num1===1){
    var piedrapc=1;
    } else if(num1==2){
    var papelpc=2;
    }else{
    var tijerapc=3;
    }*/
