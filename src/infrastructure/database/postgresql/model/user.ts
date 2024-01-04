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

    @Column({ name: 'age', type: 'int', nullable: false })
    public age: number

    @Column({ name: 'created_at', type: 'timestamp without time zone', nullable: false })
    public createdAt: Date

    constructor (user_id:string, firstName:string, lastName:string, email:string, age:number, createdAt:Date){
        this.user_id = user_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.createdAt = createdAt;
    }
}

export {
    UserModel
}