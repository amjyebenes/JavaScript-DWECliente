let menorYmayor = (numeros)=>{
    let arrOrdenado = numeros.sort((a, b)=> a > b);
    console.log(arrOrdenado)
    console.log([arrOrdenado[0],arrOrdenado[numeros.length-1]]);
}

document.addEventListener("load",menorYmayor([14,2,33,1,2,11]));