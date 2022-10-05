function mostrar(){
    var array = [6, "pepe", 2, "juan"];
    if(array[1].valueOf>array[2].valueOf){
        console.log("pepe es mayor que juan");
    }else if(array[1].valueOf<array[2].valueOf){
        console.log("pepe es menor que juan");
    }else console.log("Son iguales");
}