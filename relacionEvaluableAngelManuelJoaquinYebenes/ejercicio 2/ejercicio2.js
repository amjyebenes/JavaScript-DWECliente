let repeticiones = (palabra,cadena) =>{
    let cadenaArray = cadena.split(" ");
    let repeticiones = 0;
    cadenaArray.forEach(e => {
        if(palabra==e){
            repeticiones++;
        }
    });
    console.log("Se repite la palabra en la cadena " + repeticiones + " veces");
}

document.addEventListener("load",repeticiones("hola","hola que tal hola adios hola"));