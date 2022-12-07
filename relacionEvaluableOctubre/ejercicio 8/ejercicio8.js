let paresImpares = (numeros)=>{
    let pares = new Array();
    let impares = new Array();
    numeros.forEach(element => {
        if(element%2==0) pares.push(element);
        else impares.push(element);
    });
    console.log("pares " + pares + " impares " + impares);
}

document.addEventListener("load",paresImpares([1,2,3,1,4,12,312,312,3123,94845,1,245,66,4,123]));