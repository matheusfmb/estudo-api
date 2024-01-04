import { checkStringEmpty, checkNumberEmpty, checkDateEmpty } from "./validate"
import { CreateUserUseCaseValidateInterface } from "../../../domain/usecase/validate/user"
import { CreateUserUseCaseRequest } from "../../../domain/usecase/ucio/user"
import { checkIfUserExistsByEmail } from "../../internal/database/postgresql/user"


class CreateUserUseCaseValidate implements CreateUserUseCaseValidateInterface {
    async createUser(req: CreateUserUseCaseRequest): Promise<string | null> {

        if (checkStringEmpty(req.firstName)) {
            return 'O Primeiro nome não deve ser vazio.'
        }

        if (checkStringEmpty(req.lastName)) {
            return 'O Sobrenome nome não deve ser vazio.'
        }

        if (checkStringEmpty(req.email)) {
            return 'O Sobrenome nome não deve ser vazio.'
        }

        if (checkStringEmpty(req.password)) {
            return 'O Sobrenome nome não deve ser vazio.'
        }

        if (checkNumberEmpty(req.age)) {
            return 'A conta não deve ser vazia.'
        }

        const user  = await checkIfUserExistsByEmail(req.email)
        if (user){
            return 'Email já cadastrado'
        }
       
        return null
    }

}

export {
    CreateUserUseCaseValidate
}