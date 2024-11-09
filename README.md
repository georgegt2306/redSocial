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
