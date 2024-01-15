import { CreateTaskUseCase } from "../../../domain/usecase/task"
import { CreateTaskUseCaseRequest } from "../../../domain/usecase/ucio/task"
import { CreateTaskUseCaseCommon } from "../../../infrastructure/provider/common/user"
import { CreateTaskUseCaseRepository } from "../../../infrastructure/provider/repository/task"
import { CreateTaskUseCaseValidate } from "../../../infrastructure/provider/validate/task"
import { SuccessResponse } from "../response/response"
import { Request, Response } from 'express'



class CreateTaskController {
    async createTask(req: Request, res: Response): Promise<void> {
        const { title, description, userID } = req.body

        const ucReq = new CreateTaskUseCaseRequest(title, description, userID)
        const common = new CreateTaskUseCaseCommon()
        const validate = new CreateTaskUseCaseValidate()
        const repository = new CreateTaskUseCaseRepository()
        const usecase = new CreateTaskUseCase(common,repository,validate)
        const ucRes = await usecase.createTask(ucReq)

        new SuccessResponse().success(res, ucRes)
    
    }
}

export {
    CreateTaskController
}