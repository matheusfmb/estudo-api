import { UserEntity, UserUpdatePasswordEntity } from "../../../domain/entity/user"
import { CreateUserUseCaseRepositoryInterface, DeleteUserUseCaseRepositoryInterface, GetUserUseCaseRepositoryInterface, UpdateUserPasswordUseCaseRepositoryInterface } from "../../../domain/usecase/repository/user"
import { createUser, deleteUser, getUser, updateUserPassword } from "../../internal/database/postgresql/user"


class CreateUserUseCaseRepository implements CreateUserUseCaseRepositoryInterface {
    async createUser(e: UserEntity): Promise<UserEntity | null> {
        return await createUser(e)
    }
}

class GetUserUseCaseRepository implements GetUserUseCaseRepositoryInterface{
    async getUser(user_id: string): Promise<UserEntity | null> {
        return await getUser(user_id)
    }
}

class DeleteUserUseCaseRepository implements DeleteUserUseCaseRepositoryInterface{
    async DeleteUser(user_id: string): Promise<UserEntity | null> {
        return await deleteUser(user_id)
    }
    
}

class UpdateUserPasswordUseCaseRepository implements UpdateUserPasswordUseCaseRepositoryInterface {
    async updateUserPassword(e: UserUpdatePasswordEntity): Promise<UserEntity | null> {
        return await updateUserPassword(e)
    }
}

export {
    CreateUserUseCaseRepository,
    GetUserUseCaseRepository,
    DeleteUserUseCaseRepository,
    UpdateUserPasswordUseCaseRepository

}