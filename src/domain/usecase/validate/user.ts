import { CreateUserUseCaseRequest } from "../ucio/user"

interface CreateUserUseCaseValidateInterface {
    createUser(req: CreateUserUseCaseRequest): Promise<string | null>
}

export {
    CreateUserUseCaseValidateInterface
}