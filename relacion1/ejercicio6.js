function mostrarTablaMultiplicar(numero){
    document.write(`<h1>tabla de multiplicar del ${numero}</h1>`);
    for (let index = 1; index <= 10; index++) {
        document.write(`<h4> ${index*parseInt(numero)} </h4>`);
    }
}