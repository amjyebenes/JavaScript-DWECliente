function jugar(){
    var limSup=100;
    var limInf=0;
    var numero = Math.round(Math.random()*100);
    var intentos = 0;

    iniciarPartida();
    function iniciarPartida(){

        while(intentos < 10){
            apuesta = prompt(`Introduce un numero entre ${limInf} y ${limSup}: `);
            intentos++;
            if(numero!=apuesta){
                alert("Has fallado!!");
                if(numero>apuesta){
                    limInf = apuesta;
                }else limSup = apuesta;
            }else{
                alert(`Has ganado en ${intentos}!! Enhorabuena!!`);
                intentos = 10;
            } 
        }
    }
}