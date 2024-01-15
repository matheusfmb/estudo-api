import { TaskEntity } from "../../entity/task";

interface CreateTaskUseCaseRepositoryInterface {
    createTask(e: TaskEntity): Promise<TaskEntity | null>
}


export {
    CreateTaskUseCaseRepositoryInterface,
}