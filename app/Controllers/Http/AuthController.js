'use strict'

const User = use('App/Models/User')

//Aqui serao feitas as primeiras acoes para registro e autenticacao de usuarios
class AuthController {

    //Aqui, o usuario podera se registrar
    async register({request}){

        //Nessa linha, o username, email e senha do usuario sera registrado
        const data = request.only(['username','email','password'])
        //Estamos importando o modelo do usuario, que sera usado como referencia para acriacao de outros users

        //Com base nos dados coletados nas linhas anteriores, sera criado um novo usuario
        const user = await User.create(data)

        //A variavel armazenando o usuario sera retornada em formato JSON
        return user
    }

    async authenticate(){

    }
}


module.exports = AuthController
