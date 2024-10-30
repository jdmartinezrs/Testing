import Usuario from '../class/usuario';

describe('Usuario - Pruebas Unitarias', () => {
    test('Creación correcta de usuario', () => {
        /**
         * ID: USR-TEST-001
         * Tipo: Positivo
         * Descripción: Verificar la correcta creación de un usuario
         * Pasos:
         *  1. Crear un nuevo usuario
         *  2. Verificar sus propiedades
         * Datos de prueba: ID=1, nombre="Juan", edad=25
         * Resultados esperados: Usuario creado con las propiedades especificadas
         */
        const usuario = new Usuario(1, "Juan", 25);
        expect(usuario.id).toBe(1);
        expect(usuario.nombre).toBe("Juan");
        expect(usuario.edad).toBe(25);
    });

    test('Creación de usuario con diferentes tipos de datos', () => {
        /**
         * ID: USR-TEST-002
         * Tipo: Límite
         * Descripción: Verificar la creación con diferentes tipos de datos
         * Pasos:
         *  1. Crear usuarios con diferentes tipos de datos
         *  2. Verificar que se mantienen los tipos
         * Datos de prueba: Diferentes tipos de ID y edad
         * Resultados esperados: Datos convertidos al tipo correcto
         */
        const usuario1 = new Usuario("1", "Juan", "25");
        const usuario2 = new Usuario(2.5, "Ana", 30.5);

        expect(typeof usuario1.id).toBe("string");
        expect(typeof usuario1.edad).toBe("string");
        expect(typeof usuario2.id).toBe("number");
        expect(typeof usuario2.edad).toBe("number");
    });
});