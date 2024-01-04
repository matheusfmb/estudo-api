import { UserEntity, UserResponseEntity } from '../../entity/user'
import { ErrorEntity } from "../../entity/error"

class CreateUserUseCaseRequest {
    public firstName:string
    public lastName:string
    public email:string
    public password:string
    public age:number
    public payload: any

    constructor(firstname:string,lastname:string,email:string,password:string, age:number,payload: any) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
        this.password = password
        this.age = age;
        this.payload = payload;
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
