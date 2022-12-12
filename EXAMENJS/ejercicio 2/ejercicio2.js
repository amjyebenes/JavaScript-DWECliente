function crearTablero() {
    let tablero = new Array();
    for (let i = 0; i < 10; i++) {
        tablero[i] = new Array();
        for (let j = 0; j < 10; j++) {
            tablero[i][j] = Math.round(Math.random() * 69) + 30;;
        }
    }
    return tablero;
}

function mostrarTablero(tablero) {
    document.write("<table>");
    for (let i = 0; i < 10; i++) {
        document.write("<tr>");
        for (let j = 0; j < 10; j++) {
                document.write("<td>" + tablero[i][j] + "</td>");
        } 
        document.write("</tr>");
    }
    document.write("</table>");
}

function mostrarCambiandoDiagonales(tablero) {
    document.write("<table>");
    let c = 9;
    for (let i = 0; i < 10; i++) {
        document.write("<tr>");
        for (let j = 0; j < 10; j++) {
            if(i == j){
                document.write("<td>" + 1 + "</td>");
            }else if(i== (9-c) && j == c){
                document.write("<td>" + 2 + "</td>");
            }else{
                document.write("<td>" + tablero[i][j] + "</td>");
            }
        } 
        c--;
        document.write("</tr>");
    }
    document.write("</table>");
}

function ejecutar() {
    let tablero = crearTablero();
    mostrarTablero(tablero);
    document.write("<br>");
    mostrarCambiandoDiagonales(tablero)
}

document.body.addEventListener("load", ejecutar());