import { CreateTaskUseCaseRequest } from "../ucio/task";

interface CreateTaskUseCaseValidateInterface {
    createTask(req: CreateTaskUseCaseRequest): Promise<string | null>
}


export {
    CreateTaskUseCaseValidateInterface,
}