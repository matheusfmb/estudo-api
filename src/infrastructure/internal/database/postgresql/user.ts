import { DELETED, NOT_DELETED} from "../../../../domain/constants/utils"
import { UserEntity } from "../../../../domain/entity/user"
import { toUserModel, toUserEntity } from "./transformer/user"
import { Connection } from "./connection"
import { UserModel } from "./model/user"

async function createUser(e: UserEntity): Promise<UserEntity | null> {
    const userModel = toUserModel(e)
    const repository = await Connection.getRepository(UserModel)
    const modelI = await repository.save(userModel)

    return toUserEntity(modelI)
}

async function checkIfUserExistsByEmail(email:string): Promise<Boolean>{
    const repository = await Connection.getRepository(UserModel)
    const userModel = await repository.findOne({where: {email: email}});
    if (userModel){
        return true
    }else{
        return false
    }
}

export {
    createUser,
    checkIfUserExistsByEmail
}





