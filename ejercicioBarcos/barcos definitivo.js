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


const dirX = new Array(1, -1, 0, 0, 1, 1, -1, -1);
const dirY = new Array(0, 0, 1, -1, 1, -1, 1, -1);
const ocupados = new Array("1", "F", "P", "B", "A");
const barcos = new Array("F", "P", "B", "A");

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

        let dirActual = dir();
        let posicionesADibujar = new Array();

        let intentos = 0;
        let buenaPosicion = false;
        let direccionesIntentadas = new Array();

        while (!buenaPosicion || intentos < 10) {
            intentos++;
            if (tablero[rndX][rndY] != "0" && sonAdyacentesValidos(rndX, rndY, tablero)) {
                posicionesADibujar.push(new Array(rndX, rndY));
                buenaPosicion = true;
            } else {
                rndX = Math.round(Math.random() * 9);
                rndY = Math.round(Math.random() * 9);
            }

            if (buenaPosicion) {
                let acierto = false;
                intentos = 1;
                while (!acierto || intentos < 4) {
                    let despX = dirX[dirActual];
                    let despY = dirY[dirActual];
                    let x = rndX;
                    let y = rndY;
                    let parar = false;
                    let haCabido = 0;
                    while (!parar || haCabido < tamaño) {
                        if (tablero[x][y] != "1" && sonAdyacentesValidos(x, y, tablero)) {
                            posicionesADibujar.push(new Array(x, y));
                            x += despX;
                            y += despY;
                        } else {
                            parar = true;
                        }
                    }
                    if (parar) {
                        let nueva = false;
                        let nuevasDir = 0;
                        while (!nueva || nuevasDir < 4) {
                            dirActual = dir();
                            if (direccionesIntentadas.includes(dirActual)) {
                                dirActual = dir();
                            } else {
                                direccionesIntentadas.push(dirActual);
                                nueva = true;
                            }
                            nuevasDir++;
                        }
                        intentos++;
                    } else {
                        acierto = true;
                    }
                }
                if(!acierto){
                    direccionesIntentadas = new Array();
                    posicionesADibujar = new Array();
                }
            }
        }
// AQUI TENGO QUE SEGUIR CON QUE LAS POSICIONES A DIBUJAR SE DIBUJEN Y SE DIBUJEN LOS 1 TAMBIEN 
    }

    return tablero;

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




let posicionValida = (x, y, tablero) => x >= 0 && y >= 0 && x < 10 && y < 10 && !ocupados.includes(tablero[x][y]);

function ejecutar() {
    let tablero = crearTablero();
    tablero = insertarBarco("fragata", insertarBarco("portaaviones", insertarBarco("buque", insertarBarco("acorazado", tablero))));
    mostrarTablero(tablero);

}

document.body.addEventListener("load", ejecutar());