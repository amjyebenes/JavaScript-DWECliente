let lista = ["texto 1","texto 2","texto 3","texto 4","texto 5"];
lista.forEach(element => {
    let p = document.createElement("p");
    let t = document.createTextNode(element);
    p.appendChild(t);
    document.body.appendChild(p);
});

let campotexto = document.createElement("input");
let boton = document.createElement("input");
let indice = document.createElement("input");

campotexto.id = "campotexto";
campotexto.type="text";
campotexto.placeholder = "texto a introducir";

indice.id = "indice";
indice.type="text";
indice.placeholder = "indice";

boton.value="introducir";
boton.type="submit";
boton.id="boton";

boton.onclick=function(){
    console.log("aoinasd")
    let parrafos = document.querySelectorAll("p");
    let pNuevo = document.createElement("p");
    let t = document.createTextNode(document.getElementById("campotexto").value);
    pNuevo.appendChild(t);
    console.log(pNuevo);
    let aux = parrafos;
    parrafos.forEach(element => {
        element.remove();
    });
    for (let index = 0; index < parrafos.length; index++) {
        if(index==document.getElementById("indice").value-1){
           document.body.appendChild(pNuevo); 
        }
        document.body.appendChild(aux[index]);
        
    }
}

document.body.appendChild(indice);
document.body.appendChild(campotexto);
document.body.appendChild(boton);
