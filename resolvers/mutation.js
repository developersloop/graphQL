const { usuarios, nextId } = require('../data/db');


function indiceUsuario(filtro){
    if(!filtro) return -1;
    const { id, email}  = filtro;

    if(id){
        return usuarios.findIndex(i => i.id === id);
    }else if(email){
        return usuarios.findIndex(u => u.email === email);
    }
    return -1;
}
module.exports = {
    novoUsuario(_,{ dados }){

        //  validar email existente 

        const emailExistente = usuarios
                             .some(u => u.email === dados.email)

            if(emailExistente){
                    throw new Error('Email existente');
            }
        const novo  = {
            id:nextId,
           ...dados,
            perfil_id:1,
            status:'ATIVO'
        }
    
        usuarios.push(novo)
    
        return novo;
    },
    excluirUsuario(_,{ filtro }){
        const i = indiceUsuario(filtro);

        const excluidos = usuarios.splice(i,1);
        return excluidos ? excluidos[0] : null
    },

    editarUsuario(_,args){
          const i = usuarios.findIndex(i => i.id === args.id);

          if(i < 0) return null

          const usuario = {
               ...usuarios,
               ...args
          }
          usuarios.splice(i,1,usuario)
        
          return usuario;
    }
}