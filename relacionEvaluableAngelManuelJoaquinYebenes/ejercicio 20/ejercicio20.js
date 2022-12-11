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

// Lo hago con pattern
/*document.addEventListener("submit", e=>{
    if(/^_\d{3}[A-Z]{1}\w{1}_$/.test(document.getElementById("password1").value)){
        alert("Solicitud enviada correctamente");
    }else{
        alert("Contrasena incorrecta");
        e.preventDefault();
    }
})*/