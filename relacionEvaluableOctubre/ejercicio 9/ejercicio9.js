let ordenar2maneras = (numeros)=>{
    let descendente = numeros.sort((a, b)=> a < b);
    let ascendente = numeros.sort((a, b)=> a > b);

    console.log("asc: " + ascendente + " ,desc: " + descendente);
}

document.addEventListener("load",ordenar2maneras([1,3,7,4,1,2,3,5,888,6,5,3,2,12,33,55]));