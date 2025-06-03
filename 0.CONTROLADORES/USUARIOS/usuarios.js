const usuarios = require('../2.Datos/usuarios.data');


function obtenerUsuarios(req, res) {
  res.json(usuarios);
}

module.exports = { obtenerUsuarios };