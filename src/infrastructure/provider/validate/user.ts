import { checkStringEmpty, checkNumberEmpty, checkDateEmpty } from "./validate"
import { CreateUserUseCaseValidateInterface, DeleteUserCaseValidateInterface, GetUserUseCaseValidateInterface } from "../../../domain/usecase/validate/user"
import { CreateUserUseCaseRequest, DeleteUserUseCaseRequest, GetUserUseCaseRequest } from "../../../domain/usecase/ucio/user"
import { checkIfUserExistsByEmail, checkIfUserExistsByID, checkifUserIsAlreadyDeleted } from "../../internal/database/postgresql/user"


class CreateUserUseCaseValidate implements CreateUserUseCaseValidateInterface {
    async createUser(req: CreateUserUseCaseRequest): Promise<string | null> {

        if (checkStringEmpty(req.firstName)) {
            return 'O Primeiro nome não deve ser vazio.'
        }

        if (checkStringEmpty(req.lastName)) {
            return 'O Sobrenome nome não deve ser vazio.'
        }

        if (checkStringEmpty(req.email)) {
            return 'O Email não deve ser vazio.'
        }

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!regex.test(req.email)){
            return "Email inválido"
        }

        if (checkStringEmpty(req.password)) {
            return 'O Senha nome não deve ser vazio.'
        }

        if (checkNumberEmpty(req.age)) {
            return 'A idade não deve ser vazia.'
        }

        const user  = await checkIfUserExistsByEmail(req.email)
        if (user){
            return 'Email já cadastrado'
        }
       
        return null
    }

}

class GetUserUseCaseValidate implements GetUserUseCaseValidateInterface{
    async getUser(req: GetUserUseCaseRequest): Promise<string | null> {

        if (checkStringEmpty(req.user_id)) {
            return "O user_id  não deve ser vazio."
        }

        const user = await checkIfUserExistsByID(req.user_id)
        if(user){
            return 'Não existe recurso com o ID informado'
        }

        return null
    }

}
class DeleteUserUseCaseValidate implements DeleteUserCaseValidateInterface {
    async deleteUser(req: DeleteUserUseCaseRequest): Promise<string | null> {
        if (checkStringEmpty(req.user_id)) {
            return "O user_id não deve ser vazio."
        }

        const UserExists = await checkIfUserExistsByID(req.user_id)
        if(!UserExists){
            return 'Não existe recurso com o ID informado'
        }

        const user = await checkifUserIsAlreadyDeleted(req.user_id)
        if(user){
            return 'Usuário ja foi deletado'
        }

        return null
    }
}

export {
    CreateUserUseCaseValidate,
    GetUserUseCaseValidate,
    DeleteUserUseCaseValidate
}