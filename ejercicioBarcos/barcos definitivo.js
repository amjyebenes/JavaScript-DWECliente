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
        console.log(rndX, rndY);
        let dir = () => Math.round(Math.random() * 4);
        //0 derecha 1 izquierda 2 arriba 3 abajo
        // el acorazado ocupa 3

        let dirActual = dir();
        let posicionesADibujar = new Array();

        let intentosPosicion = 0;
        let buenaPosicion = false;
        let direccionesIntentadas = new Array();

        while (!buenaPosicion && intentosPosicion < 4) {
            if (!ocupados.includes(tablero[rndX][rndY]) && sonAdyacentesValidos(rndX, rndY, tablero)) {
                console.log(rndX, rndY);
                let acierto = false;
                let intentos = 1;
                while (!acierto && intentos < 4) {
                    let despX = dirX[dirActual];
                    let despY = dirY[dirActual];
                    let x = rndX;
                    let y = rndY;
                    let parar = false;
                    let haCabido = 0;
                    while (!parar && haCabido < tamaño) {
                        if (!ocupados.includes(tablero[x][y]) && sonAdyacentesValidos(x, y, tablero)) {
                            posicionesADibujar.push(new Array(x, y));
                            console.log(x, y + " son las x y");
                            x += despX;
                            y += despY;
                            haCabido++;
                        } else {
                            parar = true;
                        }
                    }
                    if (parar) {
                        let nueva = false;
                        let nuevasDir = 0;
                        while (!nueva && nuevasDir < 4) {
                            console.log(rndX, rndY);
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
                        buenaPosicion = true;
                    }
                }
                if (!acierto) {
                    direccionesIntentadas = new Array();
                    posicionesADibujar = new Array();
                }
            } else {
                rndX = Math.round(Math.random() * 10);
                rndY = Math.round(Math.random() * 10);
                intentosPosicion++;
            }
        }

        for (let index = 0; index < posicionesADibujar.length; index++) {
            let x = posicionesADibujar[index][0];
            let y = posicionesADibujar[index][1];
            tablero[x][y] = simbolo;
            dibujarUnosAlrededor(x, y, posicionesADibujar, tablero);
        }
    }

    return tablero;

}
function perteneceADibujar(x, y, posicionesADibujar) {
    for (let index = 0; index < posicionesADibujar.length; index++) {
        let xD = posicionesADibujar[index][0];
        let yD = posicionesADibujar[index][1];
        if (xD == x && yD == y) {
            return true;
        }
    }
    return false;
}

function dibujarUnosAlrededor(x, y, posicionesADibujar, tablero) {

    for (let i = 0; i < 8; i++) {
        let posX = dirX[i] + x;
        let posY = dirY[i] + y;
        if (posX >= 0 && posY >= 0 && posX < 10 && posY < 10) {
            if (!perteneceADibujar(posX, posY, posicionesADibujar)) {
                tablero[posX][posY] = "1";
            }
        }
    }
}


function sonAdyacentesValidos(x, y, tablero) {
    let libres = true;
    for (let i = 0; i < 8; i++) {
        let posX = dirX[i] + x;
        let posY = dirY[i] + y;
        if (posX >= 0 && posY >= 0 && posX < 10 && posY < 10) {
            if (!posicionValida(posX, posY, tablero)) {
                libres = false;
            }
        }
    }

    return libres;
}


let posicionValida = (x, y, tablero) => x >= 0 && y >= 0 && x < 10 && y < 10 && !barcos.includes(tablero[x][y]);

function ejecutar() {
    let tablero = crearTablero();
    
    
    tablero = insertarBarco("portaaviones", tablero);
    mostrarTablero(tablero);

}

document.body.addEventListener("load", ejecutar());