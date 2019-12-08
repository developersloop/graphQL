module.exports = function(gql){
      return  gql`
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
                perfil:Perfil
            }

            type Perfil{
                 id: ID!
                 name:String!
                 perfil:String!
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
                  perfis:[Perfil!]!
                  perfil(id: ID): Perfil
            }
        `
}