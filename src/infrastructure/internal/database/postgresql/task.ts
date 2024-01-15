import { TaskEntity } from "../../../../domain/entity/task";
import { Connection } from "./connection";
import { TaskModel } from "./model/task";
import { toTaskEntity, toTaskModel } from "./transformer/task";

async function createTask (e: TaskEntity):Promise<TaskEntity | null>{
    const taskModel = toTaskModel(e)
    const repository = await Connection.getRepository(TaskModel)
    await repository.insert(taskModel)
    return toTaskEntity(taskModel)
}


export {
    createTask
}