import { TaskEntity } from "../../../domain/entity/task";
import { CreateTaskUseCaseRepositoryInterface } from "../../../domain/usecase/repository/task";
import { createTask } from "../../internal/database/postgresql/task";


class CreateTaskUseCaseRepository implements CreateTaskUseCaseRepositoryInterface{
    async createTask(e: TaskEntity): Promise<TaskEntity | null> {
        return await createTask(e)
    }

}

export {
    CreateTaskUseCaseRepository,
}