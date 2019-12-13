const { perfis } = require('../data/db');
module.exports = {
      salario(usuario){
            return usuario.salario_real
      },

      perfil({ perfil_id }){
            const sel = perfis
                  .filter(p => p.id == perfil_id)
                  return sel ? sel[0] : null
      },
}