function generarListaYboton(){
    let lista = Array("hola","jueves","adios","madrid","ok","miercoles","z","j","1","tierra");
    for (let index = 0; index < lista.length; index++) {
        let p = document.createElement("p")
        let texto = document.createTextNode(lista[index]);
        p.appendChild(texto);
        document.body.appendChild(p);
    }
    let boton = document.createElement("input");
    boton.value="Ordenar";
    boton.type="submit";
    boton.id="boton";
    boton.onclick= function(){
        let parrafos = document.querySelectorAll("p");
        let aux = new Array();
        parrafos.forEach(element => {
            aux.push(element.innerText);
            element.remove();
        });
        let p2 = aux.sort();

        for (let index = 0; index < p2.length; index++) {
            let p = document.createElement("p")
            let texto = document.createTextNode(aux[index]);
            p.appendChild(texto);
            document.querySelector("#boton").insertAdjacentElement("beforebegin",p);
        }
    }
    document.body.appendChild(boton);
}
document.addEventListener("load",generarListaYboton());