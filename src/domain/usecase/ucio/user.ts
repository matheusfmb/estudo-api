import { UserEntity, UserResponseEntity } from '../../entity/user'
import { ErrorEntity } from "../../entity/error"

class CreateUserUseCaseRequest {
    public firstName:string
    public lastName:string
    public email:string
    public password:string
    public age:number

    constructor(firstname:string,lastname:string,email:string,password:string, age:number) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
        this.password = password
        this.age = age;
    }
        
}
class CreateUserUseCaseResponse {
    public app: UserEntity | null
    public error: ErrorEntity | null

    constructor(app: UserEntity | null, error: ErrorEntity | null) {
        this.app = app
        this.error = error
    }
}

class GetUserUseCaseRequest {
    public user_id:string

    constructor(user_id:string){
        this.user_id = user_id
    }
}

class GetUserUseCaseResponse {
    public user: UserResponseEntity | null
    public error: ErrorEntity | null

    constructor(user: UserResponseEntity | null, error: ErrorEntity | null) {
        this.user = user
        this.error = error
    }
}

class DeleteUserUseCaseRequest {
    public user_id:string

    constructor(user_id:string){
        this.user_id = user_id;
    }
}
class DeleteUserUseCaseResponse {
    public error: ErrorEntity | null

    constructor(error: ErrorEntity | null) {
        this.error = error
    }
}
class UpdateUserPasswordUseCaseRequest {
    public user_id:string
    public password:string

    constructor(user_id:string,password:string){
        this.user_id = user_id;
        this.password = password;
    }
}

class UpdateUserPasswordUseCaseResponse{
    public user: UserResponseEntity | null
    public error: ErrorEntity | null

    constructor(user: UserResponseEntity | null, error: ErrorEntity | null) {
        this.user = user
        this.error = error
    }
}

export {
    CreateUserUseCaseRequest,
    CreateUserUseCaseResponse,
    GetUserUseCaseRequest,
    GetUserUseCaseResponse,
    DeleteUserUseCaseRequest,
    DeleteUserUseCaseResponse,
    UpdateUserPasswordUseCaseRequest,
    UpdateUserPasswordUseCaseResponse

}

