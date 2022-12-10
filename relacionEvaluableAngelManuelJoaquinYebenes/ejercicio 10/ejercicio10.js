function generarParrafosyBoton(){
    for (let index = 0; index < 5; index++) {
        let p = document.createElement("p")
        let texto = document.createTextNode(index+1 + " parrafo");
        p.appendChild(texto);
        document.body.appendChild(p);
    }
    let boton = document.createElement("input");
    boton.value="Invertir";
    boton.type="submit";
    boton.onclick= function(){
        let parrafos = document.querySelectorAll("p");
        let aux = new Array();
        parrafos.forEach(element => {
            aux.push(element);
        });
    
        let parrafosInvertidos = aux.reverse();
        parrafosInvertidos.forEach(element => {
            document.body.appendChild(element);
        });
    
    }
    document.body.appendChild(boton);
}
document.addEventListener("load",generarParrafosyBoton());

