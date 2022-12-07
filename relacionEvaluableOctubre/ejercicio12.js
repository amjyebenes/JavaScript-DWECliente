let parrafo = document.createElement("p");
parrafo.appendChild(document.createTextNode("buenas tardes que tal estais este seria el enlace -> "));
let enlace = document.createElement("a");
enlace.href="http://www.marca.es";
enlace.innerText="periodico";
parrafo.appendChild(enlace);
document.body.appendChild(parrafo);


let boton = document.createElement("input");
boton.value = "Cambiar periodico";
boton.id="boton";
boton.type="submit";
boton.onclick= function(){
    let enlace = document.querySelector("p a");
    enlace.href = "http://www.as.com";
}
document.body.appendChild(boton);
