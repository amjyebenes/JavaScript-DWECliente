function cambiarColor(){
    let campo = document.getElementById("texto");
    campo.style.backgroundColor = "black";
    campo.style.color ="white";
}

function original(){
    let campo = document.getElementById("texto");
    campo.style.backgroundColor = "white";
    campo.style.color ="black";
}

document.addEventListener("click",e =>{
    if(e.target.parentNode.id=="divradio"){
        if(e.target.id=="portatil"){
            document.getElementById("campoOculto").classList.remove("ocultar");
        }else{
            document.getElementById("campoOculto").classList.add("ocultar");
        }
    }
})

document.addEventListener("click", e =>{
    if(e.target.type=="checkbox"){
        console.log(e.target.value);
    }
})

document.addEventListener("change", () =>{
    let boton = document.getElementById("Enviar");
    let hayUnoChecked = document.querySelectorAll("input[type=checkbox]:checked");
    if(hayUnoChecked){
        boton.disabled = false;
    }
});