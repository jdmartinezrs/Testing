\##Sistema de Control Teleférico

Descripción Este proyecto es un sistema de control para teleféricos que permite gestionar cabinas, usuarios y viajes. Incluye funcionalidades para crear y eliminar cabinas, registrar usuarios, solicitar viajes y obtener el estado del sistema.



\## Características

- Crear y eliminar cabinas

- Registrar usuarios
- Solicitar y gestionar viajes
- Obtener estado del sistema

\## Tecnologías 

- JavaScript 
- Node.js 
-  Jest (para pruebas unitarias)

\## Instalación 

1. Clona el repositorio:   

   ```bash   git clone <URL_DEL_REPOSITORIO>
   https://github.com/jdmartinezrs/Testing.git
   ```

   Navega al directorio del proyecto:

   ```js
   cd Testing
   ```

   Instala las dependencias:

   ```js
   npm install
   ```

El proyecto incluye pruebas unitarias utilizando Jest. Para ejecutar las pruebas, usa el siguiente comando:

```js
npm run test
```



```
project-root/
│
├── class/
│   ├── cabina.js                # Clase que define la cabina
│   ├── sistema.js               # Clase que define el sistema de control teleférico
│   └── usuario.js               # Clase que define un usuario del sistema
│
├── testing/
│   ├── cabina.test.js           # Pruebas unitarias para la clase Cabina
│   ├── sistema.test.js          # Pruebas unitarias para la clase Sistema
│   └── usuario.test.js          # Pruebas unitarias para la clase Usuario
│
├── README.md                    # Documentación del proyecto
├── package.json                 # Configuración del proyecto y dependencias
└── .gitignore                   # Archivos y carpetas a ignorar en Git

```



Las pruebas incluyen:

- Creación de cabinas 
- Eliminación de cabinas 
- Registro de usuarios 
-  Solicitud de viajes 
-  Obtención del estado del sistema



sistema.test.js

```js
### Casos de Prueba

1. **ID: SIS-TEST-001**
   - **Tipo**: Positivo
   - **Descripción**: Verificar la creación de cabina en el sistema.
   - **Pasos**:
     1. Crear una nueva cabina.
     2. Verificar que está en el sistema.
   - **Datos de Prueba**: ID=1, capacidadMaxima=10.
   - **Resultados Esperados**: Cabina creada y almacenada en el sistema.

2. **ID: SIS-TEST-002**
   - **Tipo**: Negativo
   - **Descripción**: Verificar que no se pueden crear cabinas duplicadas.
   - **Pasos**:
     1. Crear una cabina.
     2. Intentar crear otra con el mismo ID.
   - **Datos de Prueba**: Dos cabinas con ID=1.
   - **Resultados Esperados**: Error al crear la segunda cabina.

3. **ID: SIS-TEST-003**
   - **Tipo**: Positivo
   - **Descripción**: Verificar la eliminación de cabinas.
   - **Pasos**:
     1. Crear una cabina.
     2. Eliminar la cabina.
   - **Datos de Prueba**: Cabina con ID=1.
   - **Resultados Esperados**: Cabina eliminada correctamente.

4. **ID: SIS-TEST-004**
   - **Tipo**: Positivo
   - **Descripción**: Verificar la solicitud de viaje.
   - **Pasos**:
     1. Crear cabina y usuario.
     2. Solicitar viaje.
   - **Datos de Prueba**: Usuario y cabina válidos.
   - **Resultados Esperados**: Viaje asignado correctamente.

5. **ID: SIS-TEST-005**
   - **Tipo**: Positivo
   - **Descripción**: Verificar el estado del sistema.
   - **Pasos**:
     1. Crear cabinas y usuarios.
     2. Obtener estado.
   - **Datos de Prueba**: Sistema con datos.
   - **Resultados Esperados**: Estado correcto del sistema.
```

cabina.test.js

```js
### Casos de Prueba

1. **ID: CAB-TEST-001**
   - **Tipo**: Positivo
   - **Descripción**: Verificar la correcta creación de una cabina.
   - **Pasos**:
     1. Crear una nueva cabina.
     2. Verificar sus propiedades iniciales.
   - **Datos de Prueba**: ID=1, capacidadMaxima=10.
   - **Resultados Esperados**: Cabina creada con las propiedades especificadas.

2. **ID: CAB-TEST-002**
   - **Tipo**: Positivo
   - **Descripción**: Verificar que se puede agregar un pasajero a la cabina.
   - **Pasos**:
     1. Crear un usuario.
     2. Agregar usuario a la cabina.
   - **Datos de Prueba**: Usuario con ID=1, nombre="Juan", edad=25.
   - **Resultados Esperados**: Usuario agregado correctamente.

3. **ID: CAB-TEST-003**
   - **Tipo**: Límite
   - **Descripción**: Verificar que no se exceda la capacidad máxima.
   - **Pasos**:
     1. Crear una cabina con capacidad 2.
     2. Agregar 3 pasajeros.
   - **Datos de Prueba**: Cabina con capacidad 2 y 3 usuarios diferentes.
   - **Resultados Esperados**: El tercer usuario no puede ser agregado.

4. **ID: CAB-TEST-004**
   - **Tipo**: Positivo
   - **Descripción**: Verificar que se puede remover un pasajero.
   - **Pasos**:
     1. Agregar un pasajero.
     2. Remover el pasajero.
   - **Datos de Prueba**: Usuario con ID=1.
   - **Resultados Esperados**: Pasajero removido correctamente.

5. **ID: CAB-TEST-005**
   - **Tipo**: Positivo
   - **Descripción**: Verificar el cambio de ubicación.
   - **Pasos**:
     1. Verificar ubicación inicial.
     2. Cambiar ubicación.
     3. Verificar nueva ubicación.
   - **Datos de Prueba**: N/A.
   - **Resultados Esperados**: Ubicación cambiada correctamente.
```

usuario.test.js

```js
1. **ID: USR-TEST-001**
   - **Tipo**: Positivo
   - **Descripción**: Verificar la correcta creación de un usuario.
   - **Pasos**:
     1. Crear un nuevo usuario.
     2. Verificar sus propiedades.
   - **Datos de Prueba**: ID=1, nombre="Juan", edad=25.
   - **Resultados Esperados**: Usuario creado con las propiedades especificadas.

2. **ID: USR-TEST-002**
   - **Tipo**: Límite
   - **Descripción**: Verificar la creación con diferentes tipos de datos.
   - **Pasos**:
     1. Crear usuarios con diferentes tipos de datos.
     2. Verificar que se mantienen los tipos.
   - **Datos de Prueba**: Diferentes tipos de ID y edad.
   - **Resultados Esperados**: Datos convertidos al tipo correcto.
```

