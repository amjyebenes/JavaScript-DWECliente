let comprobarcapicuo = (numero)=>{

    numeroInversa = numero.split('').reverse();
    numero = numero.split('');

    if(numeroInversa.toString()==numero.toString()){
        console.log("El numero es capicua");
    }else console.log("no es capicuo");
}

document.addEventListener("load",comprobarcapicuo(prompt("introduce un numero")));