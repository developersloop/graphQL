const { ApolloServer , gql } = require('apollo-server');
const usuarios = [
       {
            id:1,
            nome:'vitor vicente',
            email:'vi_dualcore@hotmail.com',
            idade:30
       },{
            id:2,
            nome:'vinicius vicente',
            email:'vinicius@hotmail.com',
            idade:20
       },{
            id:3,
            nome:'regia mikaelle',
            email:'regia@mica.com',
            idade:22
       }
];
const typeDefs = gql`
            #criando tipos de dados

            # tipos de dados grap string float int boolean e ID

            scalar Date

            type Usuario{
                id: ID!
                nome: String!
                email: String!
                idade: Int
                salario:Float
                vip:Boolean
                
            }

            type Produto {
                nome: String!
                preco: Float!
                desconto: Float
                precoComDesconto: Float
            }
            #pontos de entrada da minha api!     sinal de obrigatorio !
            #consulta ola do tipo de retorno string
            type Query {
                  ola: String
                  horaAtual: Date
                  usuarioLogado: Usuario
                  TipoProduto: Produto,
                  numerosMegaSena: [Int!]!  #sintaxe array graphQL obrigatorio me retornar somentes inteiros, e nao nulos 
                  usuarios:[Usuario!]!
                  usuario(id: ID): Usuario
            }
`

const resolvers = {

    Produto: {
        precoComDesconto(produto){
             return  produto.preco - (produto.preco * produto.desconto)
        }
    },

     // resolvendo nome de colunas nao mapeadas 
    Usuario:{
        salario(usuario){
              return usuario.salario_real
        }
    },
     Query:{
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
                return usuarios
          },
          usuario(_,{ id }){
                  const selecionados = usuarios
                        .filter(u => u.id == id)
                return selecionados ? selecionados[0] : null
          }
     }
}


const server  = new ApolloServer({
     typeDefs,
     resolvers
})


server.listen()
                .then(({ url } ) => {
                      console.log(`Executando em ${url}`)
                })