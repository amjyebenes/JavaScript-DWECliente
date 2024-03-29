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


        let huecoSuficiente = false;

        let dirActual = dir();
        let posicionesADibujar = new Array();
        

        let direccionesIntentadas = new Array();
        direccionesIntentadas.push(dirActual);
        let seguir = true;

        for (let i = 0; i < tamaño && seguir; i++) {
            let despX = dirX[dirActual];
            let despY = dirY[dirActual];
            let x = rndX + despX;
            let y = rndY + despY;

            if (!sonAdyacentesValidos(x, y, tablero)) {
                console.log("he entrado aqui " + barco + " " + i + " posicion: " + rndX + " " + rndY + " en esta direccion " + dirActual)
                dirActual = dir();
                /*let nuevaDir = dir();
                if(!direccionesIntentadas.includes(nuevaDir)) {
                    dirActual = nuevaDir;
                    direccionesIntentadas.push(dirActual);
                }*/
                
            }

            if (i == tamaño - 1) {
                huecoSuficiente = true;
            }
        }

        if (huecoSuficiente) {
            console.log(rndX +" " +  rndY + " he encontrado hueco en esta direccion: " + dirActual);
            let despX = dirX[dirActual];
            let despY = dirY[dirActual];
            let x = rndX;
            let y = rndY;
            for (let i = 0; i < tamaño; i++) {
                if (posicionValida(x, y, tablero)) {
                    tablero[x][y] = simbolo;
                    posicionesADibujar.push(new Array(x, y));
                    x += despX;
                    y += despY;
                    
                }
            }

        } else {
            console.log("No ha cabido el barco " + barco);
        }
        posicionesADibujar = new Array();
        direccionesIntentadas = new Array();
    }
    return tablero;

}

function dibujarUnosAlrededor(x, y, posicionesADibujar, tablero) {
    for (let i = 0; i < 8; i++) {
        let posicion = new Array(x,y);
        if (!posicionesADibujar.includes(posicion)){
            let posX = dirX[i] + x;
            let posY = dirY[i] + y;
            tablero[posX][posY] = "1";
        }
    }
}


function sonAdyacentesValidos(x, y, tablero) {
    let libres = true;
    
    for (let i = 0; i < 8; i++) {
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