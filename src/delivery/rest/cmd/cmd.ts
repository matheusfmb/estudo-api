import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import { PORT } from "../config/config"
import { Router } from "../router"

class CmdRest {
    private app: express.Application

    constructor() {
        this.app = express()
        this.middleware()
        this.router()

    }

    private router() {
        new Router(this.app)
    }

    private middleware() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use((req,res,next)=>{
            console.log(`Request Type: ${req.method}`);
            console.log(`Content Type: ${req.headers["content-type"]}`)
            next()
          })
    }

    public server(): void {
        const server = http.createServer(this.app)

        server.listen(PORT, () => {
            console.log(`app-rest is running... at port ${PORT}`)
        })
    }
}

export {
    CmdRest
}
