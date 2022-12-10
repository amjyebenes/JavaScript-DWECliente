let reemplazar = (palabras, cadena)=>{
    console.log(palabras.replaceAll(cadena,''));
}

document.addEventListener("load",reemplazar("abc1 abc2 abc3 abc4 4abc5","abc"));