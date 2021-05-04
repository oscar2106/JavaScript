var articulos = [
    {nombre: "Bici", costo: 3000}, 
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000}, 
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}];


    //CREA NUEVO ARRAY CON LOS FILTRADOS
    var articulosfiltrados = articulos.filter(function(articulo){
        return articulo.costo <=500
    });

    // te trae como resultado lo que estes buscando ***.nombre o .costo****
    var nombreArticulos = articulos.map(function(articulo){
        return articulo.nombre;
    });

    //Devuelve solo el primer valor que aparece y deja de verificar los demas
    var encuentraArticulo= articulos.find(function(articulo){
        return articulo.nombre === "Laptop";
    });

    //RECORRE EL ARRAY
   articulos.forEach(function(articulo){
    console.log(articulo.nombre);
    });


    var articulosBaratos = articulos.some(function(articulo){
        return articulo.costo <= 700;
    });

