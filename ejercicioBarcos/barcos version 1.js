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
            let img;
            switch (tablero[i][j]) {
                case "F":
                    img = '<img style="width:50px" src="fragata.jpg">';
                    break;
                case "B":
                    img = '<img style="width:50px" src="buque.jpg">';
                    break;
                case "A":
                    img = '<img style="width:50px" src="acorazado.jpg">';
                    break;
                case "P":
                    img = '<img style="width:50px" src="portaaviones.jpg">';
                    break;
                default:
                    img = "&nbsp";
                    break;
            }
            if (img != "&nbsp") {
                document.write("<td>" + img + "</td>");
            } else {
                document.write("<td><br>&nbsp;&nbsp;&nbsp;&nbsp;" + img + "&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</td>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
    tablero = new Array();
}


function insertarBarco(barco, tablero) {
    if (tablero != null) {
        let tamaño, simbolo;
        switch (barco) {
            case "portaaviones":
                tamaño = 4;
                simbolo = "P";
                break;
            case "fragata":
                tamaño = 1;
                simbolo = "F";
                break;
            case "buque":
                tamaño = 2;
                simbolo = "B";
                break;
            case "acorazado":
                tamaño = 3;
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

        for (let i = 0; i < tamaño; i++) {
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
    for (let i = 0; i < 8; i++) {
        let posX = dirX[i] + x;
        let posY = dirY[i] + y;
        if (!posicionValida(posX, posY, tablero)) {
            libres = false;
        }
    }

    return libres;
}

let ocupados = new Array("F", "P", "B", "A");

let posicionValida = (x, y, tablero) => x >= 0 && y >= 0 && x < 10 && y < 10 && !ocupados.includes(tablero[x][y]);

function ejecutar() {
    let tablero = crearTablero();
    tablero = insertarBarco("fragata", tablero);
    tablero = insertarBarco("portaaviones", tablero);
    tablero = insertarBarco("buque", tablero);
    
    tablero = insertarBarco("fragata", tablero);
    tablero = insertarBarco("portaaviones", tablero);
    tablero = insertarBarco("buque", tablero);
    
    insertarBarco("acorazado", tablero);
    mostrarTablero(tablero);

}

document.body.addEventListener("load", ejecutar());