let p1 = document.createElement("p");
let p2 = document.createElement("p");

let texto = document.createTextNode("TEXTO PARRAFO 1");
let texto2 = document.createTextNode("TEXTO PARRAFO 2");

p1.appendChild(texto);
p2.appendChild(texto2);

document.body.appendChild(p1);
document.body.appendChild(p2);

let insertar = document.createElement("input");
let borrar = document.createElement("input");
let modificar = document.createElement("input");

let indiceParrafosModificar = document.createElement("input");

insertar.type = "submit";
insertar.value = "insertar parrafo";
insertar.id = "insertar";
borrar.type = "submit";
borrar.value = "borrar parrafo";
borrar.id = "borrar";
modificar.type = "submit";
modificar.value = "modificar parrafo";
modificar.id = "modificar";

indiceParrafosModificar.type="text";
indiceParrafosModificar.value="";
indiceParrafosModificar.id="indiceParrafoModificar";

insertar.onclick=function(){
    let p = document.createElement("p");
    let t = document.createTextNode(prompt("Introduce el texto del parrafo nuevo: "));
    let parrafos = document.querySelectorAll("p");
    p.tagName="nuevoP";
    p.appendChild(t);
    //document.body.insertAdjacentText("beforebegin",parrafos[parrafos.length-1]).appendChild();
    document.body.appendChild(p);
}

borrar.onclick=function(){
    let parrafos = document.querySelectorAll("p");
    parrafos[parrafos.length-1].remove();
}

modificar.onclick=function(){
    let indice = document.getElementById("indiceParrafoModificar").value;
    let parrafos = document.querySelectorAll("p");
    parrafos[indice-1].textContent = prompt("Modifica el parrafo: ");
}

document.body.appendChild(insertar);
document.body.appendChild(borrar);
document.write("<br>");
document.body.appendChild(indiceParrafosModificar);
document.body.appendChild(modificar);