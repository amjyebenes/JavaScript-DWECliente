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


function insertarBarco(barco, tablero) {
    if(tablero!=null){
    let tamaño, simbolo;
    switch (barco) {
        case "portaaviones":
            tamaño = 5;
            simbolo = "P";
            break;
        case "fragata":
            tamaño = 2;
            simbolo = "F";
            break;
        case "buque":
            tamaño = 3;
            simbolo = "B";
            break;
        case "acorazado":
            tamaño = 4;
            simbolo = "A";
            break;
    }

    let rndX = Math.round(Math.random() * 9);
    let rndY = Math.round(Math.random() * 9);
    let dir = () => Math.round(Math.random() * 4);
    //0 derecha 1 izquierda 2 arriba 3 abajo
    // el acorazado ocupa 3

    let dirX = new Array(1, -1, 0, 0);
    let dirY = new Array(0, 0, 1, -1);

    let huecoSuficiente = false;

    let dirActual = dir();
    let posicionesADibujar = new Array();
    posicionesADibujar.push(new Array(rndX, rndY));

    for (let i = 0; i < tamaño; i++) {
        let despX = dirX[dirActual];
        let despY = dirY[dirActual];

        if (!sonAdyacentesLibres(conseguirAdyacentes(rndX + despX, rndY + despY, tablero))) { // [0] pq me quedo con el valor de los adyacentes
            i = 0;
            dirActual = dir();
        } else if (i == tamaño - 1) {
            huecoSuficiente = true;
        }
    }

    if (huecoSuficiente) {
        for (let i = 1; i < tamaño; i++) {
            posicionesADibujar.push(new Array(rndX + i, rndY + i));
        }
        for (let i = 0; i < posicionesADibujar.length; i++) {
            console.log(simbolo);
            tablero[posicionesADibujar[i][0]][posicionesADibujar[i][1]] = simbolo;
        }

    } else {
        console.log("No ha cabido el barco " + barco);
    }
    }
    return tablero;

}

function sonAdyacentesLibres(adyacentes) {
    let libres = true;
    let ocupadas = new Array("1","F","P","B","A");
    for (let i = 0; i < adyacentes.length; i++) {
        if (ocupadas.includes(adyacentes[i])) {
            libres = false;
        }
    }
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

posicionValida = (x, y, tablero) => x >= 0 && y >= 0 && x < tablero.length && y < tablero.length;

function ejecutar() {
    let tablero = crearTablero();
    tablero = insertarBarco("fragata", insertarBarco("portaaviones", insertarBarco("buque", insertarBarco("acorazado", tablero))));
    mostrarTablero(tablero);

}

document.body.addEventListener("load", ejecutar());