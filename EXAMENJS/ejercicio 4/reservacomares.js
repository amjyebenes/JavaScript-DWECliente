// MIGUEL ANGEL, PARA PROBAR CON FORMULARIO TIENES QUE QUITARLE EL EVENTO FINAL DOMContentLoaded

class Cliente {
    constructor(dni, matricula, fecha, capacidad, litrosActuales, saldo = 250) {
        this.dni = dni;
        this.matricula = matricula;
        this.fecha = fecha;
        this.capacidad = capacidad;
        this.litrosActuales = litrosActuales;
        this.saldo = saldo;
    }

    llenarDeposito(precioLitro) {
        let coste = (this.capacidad - this.litrosActuales) * precioLitro;
        if (coste <= saldo) {
            this.saldo -= coste;
            this.litrosActuales = this.capacidad;
            alert("Deposito lleno");
        } else {
            alert("No hay saldo suficiente");
        }
    }

    actualizarDepositoTarjeta(litrosRecargar, precioLitro, actuales ) {
        let cabenXLitros = (this.capacidad - actuales);
        let coste = cabenXLitros * precioLitro;
        if (coste <= this.saldo) {
            if (litrosRecargar <= cabenXLitros) {
                this.saldo -= coste;
                this.litrosActuales = this.capacidad;
                alert("Deposito lleno");
            } else {
                alert("No caben esos litros");
            }
        } else {
            alert("No hay saldo suficiente");
        }
    }
    get getDni(){
        return this.dni;
    }
    get getMatricula(){
        return this.matricula;
    }

    get getFecha(){
        return this.fecha;
    }

    get getCapacidad(){
        return this.capacidad;
    }

    get getLitrosActuales(){
        return this.litrosActuales;
    }

    get getSaldo(){
        return this.saldo;
    }

    imprimirEntrega() {
        document.write("dni: " + this.getDni + "<br>");
        document.write("matricula: " + this.getMatricula + "<br>");
        document.write("fecha: " + this.getFecha + "<br>");
        document.write("capacidad:  " + this.getCapacidad + "<br>");
        document.write("litros Actuales: " + this.getLitrosActuales + "<br>");
        document.write("saldo: " + this.getSaldo + "<br>");
    }
}

const cliente = new Cliente();
document.getElementById('reservar').addEventListener('click', () => {
    let nombre = document.getElementById('cliente');
    let matricula = document.getElementById("matricula");
    let fecha = document.getElementById("fecha");
    let capacidad = document.getElementById('capacidad');

    cliente = new Cliente(nombre, matricula, fecha, capacidad, 0, 250);
    alert('cliente creado');
})

document.getElementById('recargar').addEventListener('click', () => {
    let litros = document.getElementById('litros');
    let precio = document.getElementById('precio');
    let actuales = document.getElementById('actuales');
    cliente.actualizarDepositoTarjeta(litros, precio, actuales);
    alert('cliente creado');

})

document.addEventListener('DOMContentLoaded',function(){
    let cliente = new Cliente("Angel", "123123", "22/2/1999", 150, 0, 250);
    cliente.actualizarDepositoTarjeta(50,1,12);
    cliente.imprimirEntrega();
})

