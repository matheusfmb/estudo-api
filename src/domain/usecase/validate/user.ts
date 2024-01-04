import { CreateUserUseCaseRequest } from "../ucio/user"

interface CreateAppUseCaseValidateInterface {
    createApp(req: CreateUserUseCaseRequest): Promise<string | null>
}

export {
    CreateAppUseCaseValidateInterface
}