class UserEntity {
    public user_id: string
    public firstName:string
    public lastName:string
    public email:string
    public password:string
    public age:number
    public createdAt:Date
    public updatedAt:Date
    public isActive: number
    public isDeleted: number

    constructor (user_id:string, firstName:string, lastName:string, email:string, passowrd:string, age:number, createdAt:Date, updatedAt:Date,isActive:number,isDeleted:number){
        this.user_id = user_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = passowrd;
        this.age = age;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
    }
}

class UserResponseEntity {
    public user_id: string
    public firstName:string
    public lastName:string
    public email:string
    public password:String
    public age:number
    public createdAt:Date
    public updatedAt:Date
    public isActive: number
    public isDeleted: number

    constructor (user_id:string, firstName:string, lastName:string, email:string, passowrd:string, age:number, createdAt:Date, updatedAt:Date,isActive:number,isDeleted:number){
        this.user_id = user_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = passowrd;
        this.age = age;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
    }

}

export {
    UserEntity,
    UserResponseEntity
}