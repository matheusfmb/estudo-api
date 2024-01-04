import { CreateUserUseCaseCommonInterface } from "./common/user"
import { CreateUserUseCaseValidateInterface } from "./validate/user"
import { CreateUserCaseRepositoryInterface } from "./repository/user"
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse } from "./ucio/user"
import { ACTIVE, NOT_DELETED } from "../constants/utils"
import { UserEntity } from "../entity/user"
import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from "../entity/error"

class CreateUserUseCase {
    public common: CreateUserUseCaseCommonInterface
    public validate: CreateUserUseCaseValidateInterface
    public repository: CreateUserCaseRepositoryInterface

    constructor(common: CreateUserUseCaseCommonInterface, validate: CreateUserUseCaseValidateInterface, repository: CreateUserCaseRepositoryInterface) {
        this.common = common
        this.validate = validate
        this.repository = repository
    }

    async createUser(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        try {
            const messageError = await this.validate.createUser(req)
            if (!messageError) {
                const now = new Date()
                const UUID = this.common.generateUUID()
                const userE = new UserEntity (UUID,req.firstName,req.lastName,req.email,req.password,req.age,now,now,ACTIVE,NOT_DELETED)
                const app = await this.repository.createUser(userE)
                return new CreateUserUseCaseResponse(app, null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new CreateUserUseCaseResponse(null, new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreateUserUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    CreateUserUseCase
}
