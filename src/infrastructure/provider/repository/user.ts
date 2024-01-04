import { UserEntity } from "../../../domain/entity/user"
import { CreateUserCaseRepositoryInterface } from "../../../domain/usecase/repository/user"
import { createUser } from "../../internal/database/postgresql/user"


class CreateUserUseCaseRepository implements CreateUserCaseRepositoryInterface {
    async createUser(e: UserEntity): Promise<UserEntity> {
        return await createUser(e)
    }
}

export {
    CreateUserUseCaseRepository
}