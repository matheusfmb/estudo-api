import express from 'express'
import { Router } from 'express'
import { testeController } from '../controller/user'

class UserRouter {
    private router : Router

    constructor(){
        this.router = Router()
        this.router.get('/teste', new testeController().teste)
    }


    public getRouter() : Router {
        return this.router
    }
    
}
export {
    UserRouter
}