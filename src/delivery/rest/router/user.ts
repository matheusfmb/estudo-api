import express from 'express'
import { Router } from 'express'
import { CreateUserController } from '../controller/user'

class UserRouter {
    private router : Router

    constructor(){
        this.router = Router()
        this.router.get('/teste', new CreateUserController().teste)
        this.router.post('/createUser', new CreateUserController().createUser)
    }


    public getRouter() : Router {
        return this.router
    }
    
}
export {
    UserRouter
}