import { CreateTaskUseCaseRequest } from "../../../domain/usecase/ucio/task";
import { CreateTaskUseCaseValidateInterface } from "../../../domain/usecase/validate/task";
import { checkIfUserExistsByID } from "../../internal/database/postgresql/user";
import { checkStringEmpty } from "./validate";



class CreateTaskUseCaseValidate implements CreateTaskUseCaseValidateInterface {
    async createTask(req: CreateTaskUseCaseRequest): Promise<string | null> {

        if (checkStringEmpty(req.title)) {
            return 'O Título nome não deve ser vazio.'
        }

        if (checkStringEmpty(req.description)) {
            return 'A descrição nome não deve ser vazio.'
        }

        if (checkStringEmpty(req.userID)) {
            return 'O userID não deve ser vazio.'
        }

        const user = await checkIfUserExistsByID(req.userID)
        if(!user){
            return 'Não Existe usuário com o ID informado'
        }
       
        return null
    }

}

export {
    CreateTaskUseCaseValidate,
}