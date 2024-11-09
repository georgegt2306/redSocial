# redSocial

# Prueba Técnica calculador de distancia entre usuarios
Este proyecto es una API construida con Express que calcula la distancia entre dos usuarios en función de las relaciones de seguimiento.

## Descripción
La API permite calcular la distancia entre un usuario de origen y un usuario de destino, definida como el número mínimo de pasos necesarios para llegar desde el origen al destino a través de las conexiones de seguimiento.

### Estructura de Datos

Cada usuario tiene una lista de usuarios que sigue, almacenada en un arreglo de objetos. Ejemplo:

```javascript
const usuarios = [
  { user: "userA", Following: ["userB", "userD", "userE", "userG"] },
  { user: "userB", Following: ["userC", "userJ", "userI", "userE"] },
  { user: "userC", Following: ["userM", "userN", "userJ", "userI", "userE"] },
];
```

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio.
2. Instala las dependencias necesarias usando npm:
    ```bash
    npm install
    ```
3. Inicia el servidor de desarrollo:
    ```bash
    npm start
    ```
## Uso
Para calcular la distancia entre dos usuarios, realiza una solicitud GET a:
    ```bash
    http://localhost:3000/usuario/distancia?usuario_origen={usuarioA}&usuario_destino={usuarioB}
    ```
### Parámetros
* usuario_origen: usuario de partida.
* usuario_destino: usuario de destino.

### Ejemplo de solicitud
    ```bash
    http://localhost:3000/usuario/distancia?usuario_origen=userB&usuario_destino=userM
    ```
### Ejemplo de respuesta
    ```json
    {
    "message": "La distancia es: 2",
    "data": {
        "distancia": 2
    }
    }
    ```

## Notas
* Si el usuario de origen o de destino no existen, la respuesta será null.
* La API devuelve un código de error 400 si faltan parámetros obligatorios.

```json
Este `README` detalla el propósito, la configuración y el uso de la API para calcular la distancia entre usuarios.
```