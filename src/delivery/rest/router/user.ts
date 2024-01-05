import express from 'express'
import { Router } from 'express'
import { CreateUserController, DeleteUserController, GetUserController } from '../controller/user'
import { DeleteUserUseCase } from '../../../domain/usecase/user'

class UserRouter {
    private router : Router

    constructor(){
        this.router = Router()
        this.router.post('/createUser', new CreateUserController().createUser)
        this.router.post('/getUser', new GetUserController().getUser)
        this.router.post('/deleteUser', new DeleteUserController().deleteUser)
    }
    public getRouter() : Router {
        return this.router
    }
    
}
export {
    UserRouter
}