import SistemaControlTeleferico from '../class/sistema';
import Cabina from '../class/cabina'; 

describe('Sistema Control Teleférico - Pruebas Unitarias', () => {
    let sistema;

    beforeEach(() => {
        sistema = new SistemaControlTeleferico();
    });

    test('Crear cabina en el sistema', () => {
        /**
         * ID: SIS-TEST-001
         * Tipo: Positivo
         * Descripción: Verificar la creación de cabina en el sistema
         * Pasos:
         *  1. Crear una nueva cabina
         *  2. Verificar que está en el sistema
         * Datos de prueba: ID=1, capacidadMaxima=10
         * Resultados esperados: Cabina creada y almacenada en el sistema
         */
        const cabina = sistema.crearCabina(1, 10);
        expect(sistema.cabinas.has(1)).toBe(true);
        expect(cabina.capacidadMaxima).toBe(10);
    });

    test('Crear cabina duplicada', () => {
        /**
         * ID: SIS-TEST-002
         * Tipo: Negativo
         * Descripción: Verificar que no se pueden crear cabinas duplicadas
         * Pasos:
         *  1. Crear una cabina
         *  2. Intentar crear otra con el mismo ID
         * Datos de prueba: Dos cabinas con ID=1
         * Resultados esperados: Error al crear la segunda cabina
         */
        sistema.crearCabina(1, 10);
        expect(() => sistema.crearCabina(1, 15)).toThrow();
    });

    test('Eliminar cabina del sistema', () => {
        /**
         * ID: SIS-TEST-003
         * Tipo: Positivo
         * Descripción: Verificar la eliminación de cabinas
         * Pasos:
         *  1. Crear una cabina
         *  2. Eliminar la cabina
         * Datos de prueba: Cabina con ID=1
         * Resultados esperados: Cabina eliminada correctamente
         */
        sistema.crearCabina(1, 10);
        sistema.eliminarCabina(1);
        expect(sistema.cabinas.has(1)).toBe(false);
    });

    test('Solicitar viaje exitoso', () => {
        /**
         * ID: SIS-TEST-004
         * Tipo: Positivo
         * Descripción: Verificar la solicitud de viaje
         * Pasos:
         *  1. Crear cabina y usuario
         *  2. Solicitar viaje
         * Datos de prueba: Usuario y cabina válidos
         * Resultados esperados: Viaje asignado correctamente
         */
        sistema.crearCabina(1, 10);
        sistema.registrarUsuario(1, "Juan", 25);
        const cabina = sistema.solicitarViaje(1, "estacionA");
        expect(sistema.viajesEnCurso.has(1)).toBe(true);
        expect(cabina.pasajeros).toHaveLength(1);
    });

    test('Obtener estado del sistema', () => {
        /**
         * ID: SIS-TEST-005
         * Tipo: Positivo
         * Descripción: Verificar el estado del sistema
         * Pasos:
         *  1. Crear cabinas y usuarios
         *  2. Obtener estado
         * Datos de prueba: Sistema con datos
         * Resultados esperados: Estado correcto del sistema
         */
        sistema.crearCabina(1, 10);
        sistema.registrarUsuario(1, "Juan", 25);
        const estado = sistema.obtenerEstadoSistema();
        expect(estado.cabinas).toHaveLength(1);
        expect(estado.usuariosRegistrados).toBe(1);
    });
});