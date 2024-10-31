import Cabina from './cabina';
import Usuario from './usuario'
class SistemaControlTeleferico {
    constructor() {
        this.cabinas = new Map();
        this.usuarios = new Map();
        this.viajesEnCurso = new Map();
    }

    
    crearCabina = (id, capacidadMaxima) => {
        if (this.cabinas.has(id)) {
            throw new Error(`Ya existe una cabina con el ID ${id}`);
        }
        const nuevaCabina = new Cabina(id, capacidadMaxima);
        this.cabinas.set(id, nuevaCabina);
        return nuevaCabina;
    }

    
    eliminarCabina = (id) => {
        if (!this.cabinas.has(id)) {
            throw new Error(`No existe una cabina con el ID ${id}`);
        }
        const cabina = this.cabinas.get(id);
        if (cabina.enMovimiento || cabina.pasajeros.length > 0) {
            throw new Error('No se puede eliminar una cabina en movimiento o con pasajeros');
        }
        this.cabinas.delete(id);
    }

    
    registrarUsuario = (id, nombre, edad) => {
        if (this.usuarios.has(id)) {
            throw new Error(`Ya existe un usuario con el ID ${id}`);
        }
        const nuevoUsuario = new Usuario(id, nombre, edad);
        this.usuarios.set(id, nuevoUsuario);
        return nuevoUsuario;
    }

    
    solicitarViaje = (usuarioId, origen) => {
        const usuario = this.usuarios.get(usuarioId);
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }

        
        const cabinasDisponibles = Array.from(this.cabinas.values())
            .filter(c => !c.enMovimiento && 
                        c.ubicacionActual === origen && 
                        c.pasajeros.length < c.capacidadMaxima);

        if (cabinasDisponibles.length === 0) {
            throw new Error('No hay cabinas disponibles en este momento');
        }

       
        const cabina = cabinasDisponibles[0];
        if (cabina.agregarPasajero(usuario)) {
            this.viajesEnCurso.set(usuarioId, cabina.id);
            return cabina;
        }

        throw new Error('No se pudo asignar el viaje');
    }

    iniciarViaje = (cabinaId) => {
        const cabina = this.cabinas.get(cabinaId);
        if (!cabina) {
            throw new Error('Cabina no encontrada');
        }

        if (cabina.enMovimiento) {
            throw new Error('La cabina ya está en movimiento');
        }

        cabina.iniciarMovimiento();
        
        
        setTimeout(() => {
            cabina.detenerMovimiento();
            cabina.cambiarUbicacion();
           
            console.log(`Cabina ${cabinaId} ha llegado a ${cabina.ubicacionActual}`);
        }, 5000); 
    }

    
    obtenerEstadoSistema = () => {
        return {
            cabinas: Array.from(this.cabinas.values()),
            viajesEnCurso: Array.from(this.viajesEnCurso.entries()),
            usuariosRegistrados: this.usuarios.size
        };
    }
}

export default SistemaControlTeleferico;