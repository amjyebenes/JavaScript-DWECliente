class Password{
    constructor(){
        this.longitud = 8;
        this.contrasena = this.generarContrasena();
    }

    get getContrasena(){
        return this.contrasena;
    }

    set setContrasena(c){
        this.contrasena = c;
    }

    get getLongitud(){
        return this.longitud;
    }

    set setLongitud(l){
        this.longitud = l;
    }

    generarContrasena (){
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result1= ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < this.longitud; i++ ) {
            result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result1;
    }

    esFuerte(){
        let mayusculas = 0, minusculas = 0, numeros = 0;
        for (let index = 0; index < this.contrasena.length; index++) {
            let caracter = this.contrasena.charAt(index);
            if(caracter >= 65 && caracter <= 90){
                mayusculas++;
            }else if(caracter >= 97 && caracter <= 122){
                minusculas++;
            }else if(caracter >= 48 && caracter <= 57){
                numeros++;
            }
        }

        if(mayusculas > 2 && minusculas > 1 && numeros > 5){
            return true;
        }else return false;
    }

    encriptarPassword(){
        let contrasenaEncriptada = "";
        for (let index = 0; index < this.getContrasena.length; index++) {
            let caracter = this.getContrasena.charAt(index).charCodeAt(0);
            //console.log(caracter)
            if(caracter >= 48 && caracter <= 57){
                caracter+=97;
                contrasenaEncriptada = contrasenaEncriptada.concat(String.fromCharCode(caracter+97));
            }else if(caracter >= 65 && caracter <= 122){
                caracter = (((caracter%5)+5)%5);
                contrasenaEncriptada = contrasenaEncriptada.concat(caracter.toString());
            }
            
        }
        this.setContrasena = contrasenaEncriptada;
    }
}

function mostrarpassword(){
    let pass = new Password();
    console.log(pass.getContrasena);
    pass.encriptarPassword();
    console.log(pass.getContrasena);
}

document.addEventListener("load",mostrarpassword());