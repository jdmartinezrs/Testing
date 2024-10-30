class Cabina {
    constructor(id, capacidadMaxima) {
        this.id = id;
        this.capacidadMaxima = capacidadMaxima;
        this.pasajeros = [];
        this.enMovimiento = false;
        this.ubicacionActual = "estacionA"; 
    }

    agregarPasajero(usuario) {
        if (this.pasajeros.length < this.capacidadMaxima) {
            this.pasajeros.push(usuario);
            return true;
        }
        return false;
    }

    removerPasajero(usuarioId) {
        this.pasajeros = this.pasajeros.filter(p => p.id !== usuarioId);
    }

    iniciarMovimiento() {
        this.enMovimiento = true;
    }

    detenerMovimiento() {
        this.enMovimiento = false;
    }

    cambiarUbicacion() {
        this.ubicacionActual = this.ubicacionActual === "estacionA" ? "estacionB" : "estacionA";
    }
}

export default Cabina;