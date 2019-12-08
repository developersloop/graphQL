const {usuarios, perfis }  = require('../data/db');

module.exports = {
      ola(){
            return 'bom dia'
        },

        horaAtual(){
              return new Date().toString();
        },
        usuarioLogado(){
              return {
                    id:1,
                    nome:'Ana web',
                    email:'vi_dualcore@hotmail.com',
                    salario_real:1243.00,
                    vip:true
              }
        },

       TipoProduto(){
           return {
                  nome:'Agua de Coco',
                  preco:100.00,
                  desconto:0.05
           }
       },

       numerosMegaSena(){
             const crescente = (a,b) => a - b;
             return Array(6).fill(0)
                    .map(n => parseInt(Math.random() *60 + 1))
                    .sort(crescente);
       },
       usuarios(){
             console.log('adad');
             return usuarios
       },
       usuario(_,{ id }){
               const selecionados = usuarios
                     .filter(u => u.id == id)
             return selecionados ? selecionados[0] : null
       },
       perfis(){
             return perfis
       },
        perfil(_,{ id }){
           const sel = perfis.filter(p => p.id == id);
           return sel ? sel[0] : null
        }
}