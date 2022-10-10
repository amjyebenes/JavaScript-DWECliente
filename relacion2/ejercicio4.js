function mostrar(){
    var array = [6, "pepe", 2, "juan"];
    if(array[1].length()>(array[3]).length()){
        console.log("pepe es mayor que juan");
    }else if(array[1].length()<(array[3]).length()){
        console.log("pepe es menor que juan");
    }else console.log("Son iguales");
}