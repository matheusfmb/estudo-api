import { Request, Response } from 'express'
import { SuccessResponse } from '../response/response'
import { CreateUserUseCaseRequest, DeleteUserUseCaseRequest, GetUserUseCaseRequest } from '../../../domain/usecase/ucio/user'
import { CreateUserUseCaseCommon } from '../../../infrastructure/provider/common/user'
import { CreateUserUseCaseValidate, DeleteUserUseCaseValidate, GetUserUseCaseValidate } from '../../../infrastructure/provider/validate/user'
import { CreateUserUseCaseRepository, DeleteUserUseCaseRepository, GetUserUseCaseRepository } from '../../../infrastructure/provider/repository/user'
import { CreateUserUseCase, DeleteUserUseCase, GetUserUseCase } from '../../../domain/usecase/user'

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

class GetUserController {
    async getUser(req: Request, res: Response): Promise<void>{
        const { user_id } = req.body

        const ucReq = new GetUserUseCaseRequest(user_id)
        const validate = new GetUserUseCaseValidate()
        const repository = new GetUserUseCaseRepository() 
        const usecase = new GetUserUseCase(validate,repository)
        const ucRes = await usecase.getUser(ucReq)

        new SuccessResponse().success(res,ucRes)
    }

}

class DeleteUserController {
    async deleteUser(req: Request, res: Response):Promise<void>{
        const { user_id } = req.body
        const ucReq = new DeleteUserUseCaseRequest(user_id)
        const validate = new DeleteUserUseCaseValidate()
        const repository = new DeleteUserUseCaseRepository()
        const usecase = new DeleteUserUseCase(repository,validate)
        const ucRes = await usecase.deleteUser(ucReq)

        new SuccessResponse().success(res,ucRes)
    }
}


export {
    CreateUserController,
    GetUserController,
    DeleteUserController 
}