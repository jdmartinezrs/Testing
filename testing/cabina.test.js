
import Cabina from '../class/cabina';
import Usuario from '../class/usuario';

describe('Cabina - Pruebas Unitarias', () => {
    let cabina;

    beforeEach(() => {
        cabina = new Cabina(1, 10);
    });

    test('Creación correcta de cabina', () => {
        /**
         * ID: CAB-TEST-001
         * Tipo: Positivo
         * Descripción: Verificar la correcta creación de una cabina
         * Pasos: 
         *  1. Crear una nueva cabina
         *  2. Verificar sus propiedades iniciales
         * Datos de prueba: ID=1, capacidadMaxima=10
         * Resultados esperados: Cabina creada con las propiedades especificadas
         */
        expect(cabina.id).toBe(1);
        expect(cabina.capacidadMaxima).toBe(10);
        expect(cabina.pasajeros).toHaveLength(0);
        expect(cabina.enMovimiento).toBe(false);
        expect(cabina.ubicacionActual).toBe("estacionA");
    });

    test('Agregar pasajero a cabina', () => {
        /**
         * ID: CAB-TEST-002
         * Tipo: Positivo
         * Descripción: Verificar que se puede agregar un pasajero a la cabina
         * Pasos:
         *  1. Crear un usuario
         *  2. Agregar usuario a la cabina
         * Datos de prueba: Usuario con ID=1, nombre="Juan", edad=25
         * Resultados esperados: Usuario agregado correctamente
         */
        const usuario = new Usuario(1, "Juan", 25);
        const resultado = cabina.agregarPasajero(usuario);
        
        expect(resultado).toBe(true);
        expect(cabina.pasajeros).toHaveLength(1);
        expect(cabina.pasajeros[0]).toBe(usuario);
    });

    test('Límite de capacidad de cabina', () => {
        /**
         * ID: CAB-TEST-003
         * Tipo: Límite
         * Descripción: Verificar que no se exceda la capacidad máxima
         * Pasos:
         *  1. Crear una cabina con capacidad 2
         *  2. Agregar 3 pasajeros
         * Datos de prueba: Cabina con capacidad 2 y 3 usuarios diferentes
         * Resultados esperados: El tercer usuario no puede ser agregado
         */
        cabina = new Cabina(1, 2); // Cabina con capacidad 2
        const usuario1 = new Usuario(1, "Juan", 25);
        const usuario2 = new Usuario(2, "Ana", 30);
        const usuario3 = new Usuario(3, "Pedro", 35);

        expect(cabina.agregarPasajero(usuario1)).toBe(true);
        expect(cabina.agregarPasajero(usuario2)).toBe(true);
        expect(cabina.agregarPasajero(usuario3)).toBe(false);
        expect(cabina.pasajeros).toHaveLength(2);
    });

    test('Remover pasajero de cabina', () => {
        /**
         * ID: CAB-TEST-004
         * Tipo: Positivo
         * Descripción: Verificar que se puede remover un pasajero
         * Pasos:
         *  1. Agregar un pasajero
         *  2. Remover el pasajero
         * Datos de prueba: Usuario con ID=1
         * Resultados esperados: Pasajero removido correctamente
         */
        const usuario = new Usuario(1, "Juan", 25);
        cabina.agregarPasajero(usuario);
        cabina.removerPasajero(1);
        expect(cabina.pasajeros).toHaveLength(0);
    });

    test('Cambio de ubicación de cabina', () => {
        /**
         * ID: CAB-TEST-005
         * Tipo: Positivo
         * Descripción: Verificar el cambio de ubicación
         * Pasos:
         *  1. Verificar ubicación inicial
         *  2. Cambiar ubicación
         *  3. Verificar nueva ubicación
         * Datos de prueba: N/A
         * Resultados esperados: Ubicación cambiada correctamente
         */
        expect(cabina.ubicacionActual).toBe("estacionA");
        cabina.cambiarUbicacion();
        expect(cabina.ubicacionActual).toBe("estacionB");
        cabina.cambiarUbicacion();
        expect(cabina.ubicacionActual).toBe("estacionA");
    });
});