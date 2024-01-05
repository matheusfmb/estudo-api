import { DELETED, NOT_DELETED} from "../../../../domain/constants/utils"
import { UserEntity } from "../../../../domain/entity/user"
import { toUserModel, toUserEntity, rowToUserEntity } from "./transformer/user"
import { Connection } from "./connection"
import { UserModel } from "./model/user"

async function createUser(e: UserEntity): Promise<UserEntity | null> {
    const userModel = toUserModel(e)
    const repository = await Connection.getRepository(UserModel)
    await repository.insert(userModel)
    return toUserEntity(userModel)
}

async function checkIfUserExistsByEmail(email:string): Promise<boolean>{
    const repository = await Connection.getRepository(UserModel)
    const userModel = await repository.findOne({where: {email: email}})
    return !!userModel
}

async function checkIfUserExistsByID(user_id:string): Promise<boolean>{
    const repository = await Connection.getRepository(UserModel)
    const userModel = await repository.findOne({where: {user_id: user_id}})
    return !!userModel
}


async function getUser(user_id:string): Promise<UserEntity | null>{
    const repository = await Connection.getRepository(UserModel)
    const userModel = await repository.findOne({where: {user_id:user_id}})
    return toUserEntity(userModel)
}

async function deleteUser(user_id:string): Promise<UserEntity | null>{
    const manager = await Connection.getManager()
    const res = await manager.createQueryBuilder()
    .update(UserModel)
    .set({
        isDeleted: DELETED
    })
    .where({user_id})
    .returning('*')
    .execute()
    console.log(res)
    const [row] = res.raw
    return rowToUserEntity(row)
}

async function checkifUserIsAlreadyDeleted(user_id:string):Promise<boolean> {
    const manager = await Connection.getManager()
    const user = await manager
        .createQueryBuilder()
        .select("user")
        .from(UserModel,"user")
        .where({ user_id })
        .andWhere({ isDeleted: DELETED })
        .getOne();
    return !!user;
    
}

export {
    createUser,
    checkIfUserExistsByEmail,
    getUser,
    checkIfUserExistsByID,
    deleteUser,
    checkifUserIsAlreadyDeleted
}





