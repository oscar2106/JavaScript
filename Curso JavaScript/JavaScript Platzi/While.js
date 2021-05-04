var estudiantes =["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

while(estudiantes.length>0){
    console.log(estudiantes);
var estudiante=estudiantes.shift();
saludarEstudiantes(estudiante);
}

//Do while
do {
    saludarEstudiante(estudiantes[i]);
    i++;
} while (i < estudiantes.length)