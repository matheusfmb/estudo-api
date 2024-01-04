import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({schema: 'user'})
class UserModel {
    @PrimaryColumn({ name: 'user_id', type: 'uuid' })
    public user_id: string

    @Column({ name: 'first_name', type: 'varchar', nullable: false })
    public firstName: string

    @Column({ name: 'last_name', type: 'varchar', nullable: false })
    public lastName: string

    @Column({ name: 'email', type: 'varchar', nullable: false })
    public email: string

    @Column({ name: 'password', type: 'varchar', nullable: false })
    public password: string

    @Column({ name: 'age', type: 'int', nullable: false })
    public age: number

    @Column({ name: 'created_at', type: 'timestamp without time zone', nullable: false })
    public createdAt: Date

    @Column({ name: 'updated_at', type: 'timestamp without time zone', nullable: false })
    public updatedAt: Date

    @Column({ name: 'is_active', type: 'smallint', nullable: false })
    public isActive: number

    @Column({ name: 'is_deleted', type: 'smallint', nullable: false })
    public isDeleted: number

    @Column({ name: 'payload', type: 'jsonb', nullable: true })
    public payload: any

    constructor (user_id:string, firstName:string, lastName:string, email:string, password:string, age:number, createdAt:Date, updateAt:Date,isActive:number,isDeleted:number,payload:any){
        this.user_id = user_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.createdAt = createdAt;
        this.updatedAt = updateAt;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
        this.payload = payload;
    }
}

export {
    UserModel
}