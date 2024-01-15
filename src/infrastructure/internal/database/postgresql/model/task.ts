import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({schema: 'api', name: "task"})
class TaskModel {
    @PrimaryColumn({ name: 'task_id', type: 'uuid' })
    public taskID: string

    @Column({ name: 'title', type: 'varchar', nullable: false })
    public title: string

    @Column({ name: 'description', type: 'varchar', nullable: false })
    public description: string

    @Column({ name: 'status', type: 'boolean', nullable: false })
    public status: boolean

    @Column({ name: 'user_id', type: 'uuid', nullable: false })
    public userID: string

    @Column({ name: 'created_at', type: 'timestamp without time zone', nullable: false })
    public createdAt: Date

    @Column({ name: 'updated_at', type: 'timestamp without time zone', nullable: false })
    public updatedAt: Date

    @Column({ name: 'is_active', type: 'smallint', nullable: false })
    public isActive: number

    @Column({ name: 'is_deleted', type: 'smallint', nullable: false })
    public isDeleted: number

    constructor(taskID:string, title:string, description:string, status:boolean, userID: string,createdAt:Date, updateAt:Date,isActive:number,isDeleted:number){
        this.taskID = taskID;
        this.title = title;
        this.description = description;
        this.status = status;
        this.userID = userID;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
    }
}

export{
    TaskModel
}