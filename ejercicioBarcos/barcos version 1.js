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
    if (tablero != null) {
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

        let direccionesIntentadas = new Array();
        direccionesIntentadas.push(dirActual);
        let localizacionesIntentadas = new Array();
        localizacionesIntentadas.push(new Array(rndX, rndY));
        let seguir = true;

        for (let i = 0; i < tamaño && seguir; i++) {
            let despX = dirX[dirActual];
            let despY = dirY[dirActual];
            let x = rndX + despX;
            let y = rndY + despY;

            if (!sonAdyacentesValidos(x, y, tablero)) {
                dirActual = dir();
                while (direccionesIntentadas.includes(dirActual) && direccionesIntentadas.length < 4) {
                    if (direccionesIntentadas.includes(dirActual)) {
                        dirActual = dir();
                    } else {
                        direccionesIntentadas.push(dirActual);
                    }
                }

                if (direccionesIntentadas.length == 4) {

                    rndX = Math.round(Math.random() * 9);
                    rndY = Math.round(Math.random() * 9);
                    let localizacion = new Array(rndX, rndY);
                    localizacionesIntentadas.push(new Array(rndX, rndY));
                    while (localizacionesIntentadas.includes(localizacion) && localizacionesIntentadas.length < 20) {
                        if (localizacionesIntentadas.includes(localizacion)) {
                            rndX = Math.round(Math.random() * 9);
                            rndY = Math.round(Math.random() * 9);
                            localizacion = new Array(rndX, rndY);
                        } else {
                            localizacionesIntentadas.push(localizacion);
                        }
                    }
                    if (localizacionesIntentadas.length == 20) {
                        seguir = false;
                    }
                }


            } else {
                posicionesADibujar.push(new Array(rndX, rndY));
            }

            if (i == tamaño - 1) {
                huecoSuficiente = true;
            }
        }

        if (huecoSuficiente) {
            let despX = dirX[dirActual];
            let despY = dirY[dirActual];
            let x = rndX;
            let y = rndY;
            for (let i = 0; i < tamaño; i++) {
                if (posicionValida(x, y, tablero)) {
                    tablero[x][y] = simbolo;
                    dibujarUnosAlrededor(x, y, posicionesADibujar, tablero);
                    x += despX;
                    y += despY;
                }
            }

        } else {
            console.log("No ha cabido el barco " + barco);
        }
        posicionesADibujar = new Array();
    }
    return tablero;

}

function dibujarUnosAlrededor(x, y, posicionesADibujar, tablero) {
    let dirX = new Array(1, -1, 0, 0, 1, 1, -1, -1);
    let dirY = new Array(0, 0, 1, -1, 1, -1, 1, -1);
    for (let i = 0; i < 8; i++) {
        if (posicionValida(x, y, tablero) && !perteneceAPosicionesDibujar(x, y, posicionesADibujar)) {
            let posX = dirX[i] + x;
            let posY = dirY[i] + y;
            tablero[posX][posY] = "1";
        }
    }
}

function perteneceAPosicionesDibujar(x, y, posicionesADibujar) {
    let posible = false;
    for (let i = 0; i < posicionesADibujar.length; i++) {
        if (posicionesADibujar[i][0] == x && posicionesADibujar[i][1] == y) {
            posible = true;
        }
    }
    return posible;
}


function sonAdyacentesValidos(x, y, tablero) {
    let libres = true;
    let dirX = new Array(1, -1, 0, 0, 1, 1, -1, -1);
    let dirY = new Array(0, 0, 1, -1, 1, -1, 1, -1);
    for (let i = 0; i < 16; i++) {
        let posX = dirX[i] + x;
        let posY = dirY[i] + y;
        if (!posicionValida(posX, posY, tablero)) {
            libres = false;
        }
    }

    return libres;
}

let ocupados = new Array("1", "F", "P", "B", "A");

let posicionValida = (x, y, tablero) => x >= 0 && y >= 0 && x < 10 && y < 10 && !ocupados.includes(tablero[x][y]);

function ejecutar() {
    let tablero = crearTablero();
    tablero = insertarBarco("fragata", insertarBarco("portaaviones", insertarBarco("buque", insertarBarco("acorazado", tablero))));
    mostrarTablero(tablero);

}

document.body.addEventListener("load", ejecutar());