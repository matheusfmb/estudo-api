import { Request, Response } from 'express'
import { SuccessResponse } from '../response/response'
import { CreateUserUseCaseRequest } from '../../../domain/usecase/ucio/user'
import { CreateUserUseCaseCommon } from '../../../infrastructure/provider/common/user'
import { CreateUserUseCaseValidate } from '../../../infrastructure/provider/validate/user'
import { CreateUserUseCaseRepository } from '../../../infrastructure/provider/repository/user'
import { CreateUserUseCase } from '../../../domain/usecase/user'

class CreateUserController {
    async teste(req: Request, res:Response): Promise<void> {
        new SuccessResponse().success(res, "Teste")
    }

    async createUser(req: Request, res: Response): Promise<void> {
        const { firstName, lastName, email, password, age} = req.body

        const ucReq = new CreateUserUseCaseRequest(firstName, lastName, email, password, age)
        const common = new CreateUserUseCaseCommon()
        const validate = new CreateUserUseCaseValidate()
        const repository = new CreateUserUseCaseRepository()
        const usecase = new CreateUserUseCase(common, validate, repository)

        const ucRes = await usecase.createUser(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}


export {
    CreateUserController
}