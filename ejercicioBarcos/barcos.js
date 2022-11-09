function crearTablero() {

    let tablero = new Array();

    for (let i = 0; i < 10; i++) {
        tablero[i] = new Array();
        for (let j = 0; j < 10; j++) {
            tablero[i][j] = "0";
        }
    }
    return tablero;
}

function mostrarTablero(tablero) {
    document.write("<table>");
    for (let i = 0; i < 10; i++) {
        document.write("<tr>");
        for (let j = 0; j < 10; j++) {
            document.write("<td>&nbsp;&nbsp;" + tablero[i][j] + " &nbsp;</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function introducirBarco(tipo, cantidad) {
    switch (tipo) {
        case "portaaviones":
            crearPortaaviones(cantidad);
            break;
        case "fragata":
            crearFragata(cantidad);
            break;
        case "buque":
            crearBuque(cantidad);
            break;
        case "acorazado":
            crearAcorazado(cantidad);
            break;
    }
}

function crearAcorazado(cantidad, tablero) {
    let rndX = Math.round(Math.random() * 9);
    let rndY = Math.round(Math.random() * 9);
    let direccion = Math.round(Math.random() * 4);
    //0 derecha 1 izquierda 2 arriba 3 abajo
    // el acorazado ocupa 3

    
    switch(direccion){
        case 0: 
        
        break;
    }

    //AQUI TENGO QUE DIFERENCIAR POR EL SENTIDO, SI FALLA, CAMBIAR SENTIDO Y SUMANDO Y RESTANDO EN LA X E Y
    for (let i = 0; i < 3; i++) {   
        if(sonAdyacentesLibres(conseguirAdyacentes(rndX+i,rndY+i,tablero))){
            tamano++;
        }else{
            i = 0;
        }
    }
    


}

function sonAdyacentesLibres(adyacentes){
    let libres = true;
    adyacentes.forEach(e => {
        if(e!=0){
            libres = false;
        }
    });
    return libres;
}

function conseguirAdyacentes(x, y, tablero) {
    let adyacentes = new Array();

    for (let i = 0; i < 8; i++) {
        if (posicionValida(x, y, tablero)) {
            adyacentes = tablero[x][y];
        }
    }
    return adyacentes;
}

posicionValida = (x, y, tablero) => x >= 0 && y >= 0 && x < tablero.length && y < tablero[x].length;


document.body.addEventListener("load", crearAcorazado());
document.body.addEventListener("load", mostrarTablero(crearTablero()));