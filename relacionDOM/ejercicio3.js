function anadirElemento(){
    
    var li = document.createElement("li"); 
    li.innerHTML = "buenas";
    var lista = document.querySelector("ul").appendChild(li);
}