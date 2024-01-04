import { Request, Response } from 'express'
import { SuccessResponse } from '../response/response'

class testeController {
    async teste(req: Request, res:Response): Promise<void> {
        new SuccessResponse().success(res, "Teste")
    }
}
export {
    testeController
}