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
class UserUpdatePasswordEntity{
    public user_id: string
    public password: string
    public updatedAt: Date

    constructor(user_id:string, password:string,updatedAt: Date){
        this.user_id = user_id;
        this.password = password
        this.updatedAt = updatedAt
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

// class ListMyUsersEntity { 
//     public user_id: string
//     public firstName:string
//     public lastName:string
//     public email:string
//     public age:number

//     constructor(user_id:string, firstName:string, lastName:string, email:string, age:number){
//         this.user_id = user_id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//     }
// }

export {
    UserEntity,
    UserResponseEntity,
    UserUpdatePasswordEntity
}