function calcularTipoTriangulo(){
    var mayor, catetoA, catetoB; 

    if(parseInt(lado1.value)>=parseInt(lado2.value) && parseInt(lado1.value)>=parseInt(lado3.value)){
        mayor = parseInt(lado1.value);
        catetoA = parseInt(lado2.value);
        catetoB = parseInt(lado3.value);
    }else if(parseInt(lado2.value)>=parseInt(lado3.value)){
        mayor = parseInt(lado2.value);
        catetoA = parseInt(lado1.value);
        catetoB = parseInt(lado3.value);
    }else {
        mayor = parseInt(lado3.value);
        catetoA = parseInt(lado2.value);
        catetoB = parseInt(lado1.value);
    }

    console.log("Lado mayor " + mayor +" cateto A " + catetoA + " cateto B " + catetoB);

    if((catetoA+catetoB)<mayor) {
        console.log("No es un triangulo");
    }else{
        if(catetoA == catetoB && catetoA == mayor){
            console.log("Es un triangulo EQUILATERO");
        }else if(catetoA == catetoB || catetoA == mayor || catetoB == mayor){
            console.log("Es un triangulo ISOSCELES");
        }else console.log("Es un triangulo ESCALENO");
    }
    if(Math.pow(mayor,2) == (Math.pow(catetoA,2) + Math.pow(catetoB,2))){
        console.log("El triangulo es RECTANGULO");
    } 
    console.log("Fin de calculo");
}