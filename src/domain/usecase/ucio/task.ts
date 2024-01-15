import { ErrorEntity } from "../../entity/error"
import { TaskEntity } from "../../entity/task"

class CreateTaskUseCaseRequest {
    public title: string
    public description: string
    public userID: string

    constructor(title: string, description: string, userID: string){
        this.title = title;
        this.description = description;
        this.userID = userID;
    }
}

class CreateTaskUseCaseResponse {
    public task: TaskEntity | null
    public error: ErrorEntity | null

    constructor(task: TaskEntity | null, error: ErrorEntity | null) {
        this.task = task
        this.error = error
    }
}

export {
    CreateTaskUseCaseRequest,
    CreateTaskUseCaseResponse
}