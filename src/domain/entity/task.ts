class TaskEntity{
    public taskID: string
    public title: string
    public description: string
    public status: boolean
    public userID: string
    public createdAt:Date
    public updatedAt:Date
    public isActive: number
    public isDeleted: number

    constructor(taskID: string, title: string, description: string, status: boolean, userID: string, createdAt:Date, updatedAt:Date, isActive: number, isDeleted: number){
        this.taskID = taskID;
        this.title = title;
        this.description = description;
        this.status = status;
        this.userID = userID;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
    }
}

class TaskResponseEntity{
    public taskID: string
    public title: string
    public description: string
    public status: boolean
    public userID: string
    public createdAt:Date
    public updatedAt:Date
    public isActive: number
    public isDeleted: number

    constructor(taskID: string, title: string, description: string, status: boolean, userID: string, createdAt:Date, updatedAt:Date, isActive: number, isDeleted: number){
        this.taskID = taskID;
        this.title = title;
        this.description = description;
        this.status = status;
        this.userID = userID;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
    }
}

export {
    TaskEntity,
    TaskResponseEntity,
}