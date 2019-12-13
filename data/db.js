const linguagens = [
       {
          id:1,
          nome:'PHP',
          experience:'SIM'
       },{
          id:2,
          nome:'PYTHON',
          experience:'NAO'
       },{
          id:3,
          nome:'JAVA',
          experience:'SIM'
       }
]

const perfis = [
    {
         id: 1,           
         lang_id:1,
         name: 'Adiministrador', 
    },{
         id:2,
         lang_id:2,
         name:'Comum'
    }
]
const usuarios = [
    {
         id:1,
         nome:'vitor vicente',
         email:'vi_dualcore@hotmail.com',
         idade:30,
         perfil_id:1,
         status:'ATIVO'
    },{
         id:2,
         nome:'vinicius vicente',
         email:'vinicius@hotmail.com',
         idade:20,
         perfil_id:2,
         status:"INATIVO"
    },{
         id:3,
         nome:'regia mikaelle',
         email:'regia@mica.com',
         idade:22,
         perfil_id:2,
         status:'BLOQUEADO'
    }
];

module.exports = { usuarios,perfis,linguagens}