import { CreateUserUseCaseCommonInterface } from "./common/user"
import { CreateUserUseCaseValidateInterface, DeleteUserCaseValidateInterface, GetUserUseCaseValidateInterface, UpdateUserPasswordUseCaseValidateInterface } from "./validate/user"
import { CreateUserUseCaseRepositoryInterface, DeleteUserUseCaseRepositoryInterface, GetUserUseCaseRepositoryInterface,UpdateUserPasswordUseCaseRepositoryInterface } from "./repository/user"
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, DeleteUserUseCaseRequest, DeleteUserUseCaseResponse, GetUserUseCaseRequest, GetUserUseCaseResponse, UpdateUserPasswordUseCaseRequest, UpdateUserPasswordUseCaseResponse } from "./ucio/user"
import { ACTIVE, NOT_DELETED } from "../constants/utils"
import { UserEntity, UserResponseEntity, UserUpdatePasswordEntity } from "../entity/user"
import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from "../entity/error"
import { DeleteUserUseCaseRepository } from "../../infrastructure/provider/repository/user"

class CreateUserUseCase {
    public common: CreateUserUseCaseCommonInterface
    public validate: CreateUserUseCaseValidateInterface
    public repository: CreateUserUseCaseRepositoryInterface

    constructor(common: CreateUserUseCaseCommonInterface, validate: CreateUserUseCaseValidateInterface, repository: CreateUserUseCaseRepositoryInterface) {
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
                const user = await this.repository.createUser(userE)
                return new CreateUserUseCaseResponse(user, null)
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
class GetUserUseCase {
    public validate : GetUserUseCaseValidateInterface
    public repository: GetUserUseCaseRepositoryInterface

    constructor(validate:GetUserUseCaseValidateInterface, repository:GetUserUseCaseRepositoryInterface){
        this.validate = validate;
        this.repository = repository;
    }
   
    async getUser(req: GetUserUseCaseRequest): Promise<GetUserUseCaseResponse>{
        try {
            const messageError = await this.validate.getUser(req)
            if(!messageError){
                const user = await this.repository.getUser(req.user_id)
                return new GetUserUseCaseResponse(user,null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new GetUserUseCaseResponse(null, new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new GetUserUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class DeleteUserUseCase {
    public repository: DeleteUserUseCaseRepositoryInterface
    public validate: DeleteUserCaseValidateInterface

    constructor(repository: DeleteUserUseCaseRepositoryInterface,validate: DeleteUserCaseValidateInterface){
        this.repository = repository
        this.validate = validate
    }

    async deleteUser(req: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse>{
        try{
            const messageError = await this.validate.deleteUser(req)
            if(!messageError){
                await this.repository.DeleteUser(req.user_id)
                return new DeleteUserUseCaseResponse(null);
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new GetUserUseCaseResponse(null, new PreconditionError(messageError))
            }
        }catch(error: any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new GetUserUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class UpdateUserPasswordUseCase {
    public repository: UpdateUserPasswordUseCaseRepositoryInterface
    public validate: UpdateUserPasswordUseCaseValidateInterface

    constructor(repository: UpdateUserPasswordUseCaseRepositoryInterface,validate: UpdateUserPasswordUseCaseValidateInterface){
        this.repository = repository;
        this.validate = validate;
    }

    async updateUserPassword(req:UpdateUserPasswordUseCaseRequest): Promise<UpdateUserPasswordUseCaseResponse>{
        try{
            const messageError = await this.validate.updateUserPassword(req)
            if(!messageError){
                const now = new Date()
                const userE = new UserUpdatePasswordEntity(req.user_id,req.password,now)
                const user = await this.repository.updateUserPassword(userE)
                return new UpdateUserPasswordUseCaseResponse(user,null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new UpdateUserPasswordUseCaseResponse(null, new PreconditionError(messageError))
            }
        }catch(error:any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new UpdateUserPasswordUseCaseResponse(null, new InternalServerError(error.message))
        }
    }

}



export {
    CreateUserUseCase,
    GetUserUseCase,
    DeleteUserUseCase,
    UpdateUserPasswordUseCase

}
