import { TaskEntity } from "../../../../../domain/entity/task";
import { TaskModel } from "../model/task";



function toTaskModel(e: TaskEntity): TaskEntity{
    return new TaskModel(
        e.taskID,
        e.title,
        e.description,
        e.status,
        e.userID,
        e.createdAt,
        e.updatedAt,
        e.isActive,
        e.isDeleted
    )
}

function toTaskEntity(e: TaskModel): TaskModel{
    return new TaskModel(
        e.taskID,
        e.title,
        e.description,
        e.status,
        e.userID,
        e.createdAt,
        e.updatedAt,
        e.isActive,
        e.isDeleted
    )
}

export {
    toTaskModel,
    toTaskEntity
}