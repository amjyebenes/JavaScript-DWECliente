document.addEventListener("click",e=>{
    if(document.querySelector(`#p${e.target.id}`).hidden == true){
        document.querySelector(`#p${e.target.id}`).hidden = false;
    }else{
        document.querySelector(`#p${e.target.id}`).hidden = true;
    }

/*
    if(e.target.matches("#vermasZuheros")){
        document.querySelector("#pzuheros").hidden=false;
    }
    if(e.target.matches("#vermenosZuheros")){
        document.querySelector("#pzuheros").hidden=true;
    }

    if(e.target.matches("#vermasCabra")){
        document.querySelector("#pcabra").hidden=false;
    }
    if(e.target.matches("#vermenosCabra")){
        document.querySelector("#pcabra").hidden=true;
    }

    if(e.target.matches("#vermasLucena")){
        document.querySelector("#plucena").hidden=false;
    }
    if(e.target.matches("#vermenosLucena")){
        document.querySelector("#plucena").hidden=true;
    }*/
})
/*
document.addEventListener("mouseover",e=>{
    
    if(e.target.id="img"){
        e.target.style.width="450px";
        e.target.style.height="400px";
    }
    
})

document.addEventListener("mouseout",e=>{
    
    if(e.target.id="img"){
        e.target.style.width="250px";
        e.target.style.height="200px";
    }
    
})*/