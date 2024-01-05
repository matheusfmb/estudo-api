import { UserEntity } from "../../entity/user";

interface CreateUserUseCaseRepositoryInterface {
    createUser(e: UserEntity): Promise<UserEntity | null>
}

interface GetUserUseCaseRepositoryInterface{
    getUser(user_id:string): Promise<UserEntity | null>

}

interface DeleteUserUseCaseRepositoryInterface {
    DeleteUser(user_id:string): Promise<UserEntity | null>
}

export {
    CreateUserUseCaseRepositoryInterface,
    GetUserUseCaseRepositoryInterface,
    DeleteUserUseCaseRepositoryInterface
}