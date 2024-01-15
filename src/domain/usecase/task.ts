import { ACTIVE, NOT_DELETED, STATUS_DEFAULT } from "../constants/utils";
import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from "../entity/error";
import { TaskEntity } from "../entity/task";
import { CreateTaskUseCaseCommonInterface } from "./common/user";
import { CreateTaskUseCaseRepositoryInterface } from "./repository/task";
import { CreateTaskUseCaseRequest, CreateTaskUseCaseResponse } from "./ucio/task";
import { CreateTaskUseCaseValidateInterface } from "./validate/task";

class CreateTaskUseCase {
    public common: CreateTaskUseCaseCommonInterface
    public repository: CreateTaskUseCaseRepositoryInterface
    public validate: CreateTaskUseCaseValidateInterface

    constructor(common: CreateTaskUseCaseCommonInterface, repository: CreateTaskUseCaseRepositoryInterface,validate: CreateTaskUseCaseValidateInterface){
        this.common = common;
        this.repository = repository;
        this.validate = validate;
    }

    async createTask(req: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
        try {
            const messageError = await this.validate.createTask(req)
            if (!messageError) {
                const now = new Date()
                const UUID = this.common.generateUUID()
                const taskE = new TaskEntity(UUID,req.title,req.description,STATUS_DEFAULT,req.userID,now,now,ACTIVE,NOT_DELETED)
                const task = await this.repository.createTask(taskE)
                return new CreateTaskUseCaseResponse(task, null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new CreateTaskUseCaseResponse(null, new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreateTaskUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    CreateTaskUseCase,
}
