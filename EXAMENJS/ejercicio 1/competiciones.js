let enviar = document.getElementById("Enviar1");

enviar.addEventListener("click", e =>{
    let hayUnoChecked = document.querySelectorAll('input[type=checkbox]:checked');
    let campoOculto3 = document.getElementById("campoOculto3");
    if(hayUnoChecked.length == 0 && !campoOculto3.classList.contains("ocultar")){
        alert("Por favor, selecciona al menos un incidente reseñable");
        e.preventDefault();
    }
})

const selectCompeticion = document.getElementById("selectCompeticion");


selectCompeticion.addEventListener("click",(e)=>{
    if(e.target.value=="Fútbol" || e.target.value=="Baloncesto"){
        document.getElementById("campoOculto").classList.remove("ocultar");
        document.getElementById("campoOculto2").classList.add("ocultar");
    }else if(e.target.value=="Pádel"){
        document.getElementById("campoOculto2").classList.remove("ocultar");
        document.getElementById("campoOculto").classList.add("ocultar");
    }else{
        document.getElementById("campoOculto").classList.add("ocultar");
        document.getElementById("campoOculto2").classList.add("ocultar");
    }
})

const inputs = document.querySelectorAll('input[type=radio]');

inputs.forEach(input => {
    input.addEventListener("click", (e) =>{
    if(e.target.value=="Con incidentes"){
        document.getElementById("campoOculto3").classList.remove("ocultar");
    }else {
        document.getElementById("campoOculto3").classList.add("ocultar");
    }
    })
})

enviar.addEventListener("click",e=>{
    e.preventDefault();
    let limpiar = document.getElementById("Reset1");
    limpiar.addEventListener("change",e=>{
        e.preventDefault();
    })

    let textos = document.querySelectorAll('input[type="text"]');
    textos.forEach(e => {
        if(e.value!=null){
            console.log(e.value);
        }
    });
    console.log(document.getElementById('selectCompeticion').options[document.formulario1.selectCompeticion.selectedIndex].value);
    let contrasena = document.querySelectorAll('input[type="password"]');
    contrasena.forEach(e => {
        console.log(e.value);
    })
    let radios = document.querySelectorAll('input[type="radio"]:checked');
    radios.forEach(element=> {
        console.log(element.value);
    })
    
})


const label = document.getElementById('labelNumero');

document.addEventListener('keydown', () => { 
    label.textContent = document.getElementById('observaciones1').value.length;
})

