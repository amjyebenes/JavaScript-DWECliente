function mostrar(){
    var cadena = new String();
     
    cadena = "Dabale arroz a a la zorra el abad";
    cadena = cadena.replaceAll(" ",'').toUpperCase();
    cadena2 = cadena.replaceAll(" ",'').toUpperCase().split().reverse().toString();
    if(cadena==cadena2){
        const resultado = document.createElement("H4");
        resultado.innerText="las cadenas son iguales";
        let parrafo = document.getElementsByTagName("p");
        parrafo[0].textContent = resultado.textContent;
    }
}