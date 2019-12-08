const perfis = [
    {
         id: 1,           
         name: 'Adiministrador', 
    },{
         id:2,
         name:'Comum'
    }
]
const usuarios = [
    {
         id:1,
         nome:'vitor vicente',
         email:'vi_dualcore@hotmail.com',
         idade:30,
         perfil_id:1
    },{
         id:2,
         nome:'vinicius vicente',
         email:'vinicius@hotmail.com',
         idade:20,
         perfil_id:2
    },{
         id:3,
         nome:'regia mikaelle',
         email:'regia@mica.com',
         idade:22,
         perfil_id:2
    }
];

module.exports = { usuarios,perfis}