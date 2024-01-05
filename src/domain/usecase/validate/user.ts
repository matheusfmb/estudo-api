import { CreateUserUseCaseRequest, DeleteUserUseCaseRequest, GetUserUseCaseRequest } from "../ucio/user"

interface CreateUserUseCaseValidateInterface {
    createUser(req: CreateUserUseCaseRequest): Promise<string | null>
}

interface GetUserUseCaseValidateInterface {
    getUser(req: GetUserUseCaseRequest): Promise<string | null>
}

interface DeleteUserCaseValidateInterface {
    deleteUser(req: DeleteUserUseCaseRequest): Promise<string | null>
}


export {
    CreateUserUseCaseValidateInterface,
    GetUserUseCaseValidateInterface,
    DeleteUserCaseValidateInterface
}