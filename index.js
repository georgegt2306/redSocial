const express = require("express");
const app = express();

const usuarios = [
  { user: "userA", Following: ["userB", "userD", "userE", "userG"] },
  { user: "userB", Following: ["userC", "userJ", "userI", "userE"] },
  { user: "userC", Following: ["userM", "userN", "userJ", "userI", "userE"] },
];

//Funcion para obtener distancia entre origen y el destino
const distanciaEntreUsuarios = (origen, destino, usuarios, visitados = []) => {
  if (origen === destino) return 0;
  visitados.push(origen);
  const usuario = usuarios.find((item) => item.user === origen);
  if (!usuario) return null;

  for (let siguiente of usuario.Following) {
    if (!visitados.includes(siguiente)) {
      const distancia = distanciaEntreUsuarios(
        siguiente,
        destino,
        usuarios,
        visitados
      );
      if (distancia !== null) {
        distanciaMinima = 1 + distancia;
      }
    }
  }
  return distanciaMinima;
};

app.get("/usuario/distancia", function (req, res) {
  // valido recibir parametros usuario_origen y usuario_destino
  if (!req.query.usuario_origen || !req.query.usuario_destino) {
   return res.status(400).json({ message: "Faltan parametros" });
  }
  
  const resp = distanciaEntreUsuarios(
    req.query.usuario_origen,
    req.query.usuario_destino,
    usuarios
  );

  res.json({
    message: `La distancia es: ${resp}`,
    data: {
      distancia: resp,
    },
  });
});

app.listen(3000);
