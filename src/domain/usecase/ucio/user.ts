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

export {
    CreateUserUseCaseRequest,
    CreateUserUseCaseResponse
}

