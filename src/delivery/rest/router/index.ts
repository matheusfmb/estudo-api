import express from 'express'
import {UserRouter} from './user'
import { CorsRouter } from './cors'

class Router {
    constructor(app: express.Router){
        app.use(new UserRouter().getRouter())
        app.use(new CorsRouter().getRouter())
    }
}

export {
    Router
}