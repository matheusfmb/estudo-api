import { CreateUserUseCaseRequest, DeleteUserUseCaseRequest, GetUserUseCaseRequest, UpdateUserPasswordUseCaseRequest } from "../ucio/user"

interface CreateUserUseCaseValidateInterface {
    createUser(req: CreateUserUseCaseRequest): Promise<string | null>
}

interface GetUserUseCaseValidateInterface {
    getUser(req: GetUserUseCaseRequest): Promise<string | null>
}

interface DeleteUserCaseValidateInterface {
    deleteUser(req: DeleteUserUseCaseRequest): Promise<string | null>
}

interface UpdateUserPasswordUseCaseValidateInterface {
    updateUserPassword(req: UpdateUserPasswordUseCaseRequest): Promise<string | null>

}


export {
    CreateUserUseCaseValidateInterface,
    GetUserUseCaseValidateInterface,
    DeleteUserCaseValidateInterface,
    UpdateUserPasswordUseCaseValidateInterface
}