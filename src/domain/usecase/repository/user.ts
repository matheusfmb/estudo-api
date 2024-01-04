import { UserEntity } from "../../entity/user";

interface CreateUserCaseRepositoryInterface {
    createUser(e: UserEntity): Promise<UserEntity | null>
}

export {
    CreateUserCaseRepositoryInterface
}