const usuario = require('./usuarios');
const perfil =  require('./perfis');

module.exports = {
      ...usuario,
      ...perfil
}