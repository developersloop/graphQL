const { perfis,nextId }  = require('../../data/db')

function indicePerfil(filtro){
  if(!filtro) return -1;
  const { id, email}  = filtro;

  if(id){
      // console.log('caiu aqui');
      return perfis.findIndex(i => i.id == id);
  }else if(email){
      return perfis.findIndex(u => u.email === email);
  }
  return -1;
}

module.exports = {
      novoPerfil(_,{ dados }){
        const novo  = {
            id:nextId,
           ...dados
        }
        perfis.push(novo);

        return novo;
      }

     ,excluirPerfil(_,{ filtro }){
        const i = indicePerfil(filtro);

        const excluidos = perfis.splice(i,1);
        console.log(excluidos);
        return excluidos ? excluidos[0] : null
     },

     editarPerfil(_,{ filtro, dados}){
        const i = indicePerfil(filtro);
        if(i < 0) return null
        perfis[i].name = dados.name;
        return perfis[i];
     }


      
}