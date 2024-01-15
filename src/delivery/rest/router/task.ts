import { Router } from 'express'
import { CreateTaskController } from '../controller/task'

class TaskRouter {
    private router : Router

    constructor(){
        this.router = Router()
        this.router.post('/createTask', new CreateTaskController().createTask)
        
    }
    public getRouter() : Router {
        return this.router
    }
    
}
export {
    TaskRouter
}