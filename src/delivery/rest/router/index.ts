import express from 'express'
import {UserRouter} from './user'
import { CorsRouter } from './cors'
import { TaskRouter } from './task'

class Router {
    constructor(app: express.Router){
        app.use(new UserRouter().getRouter())
        app.use(new CorsRouter().getRouter())
        app.use(new TaskRouter().getRouter())
    }
}

export {
    Router
}