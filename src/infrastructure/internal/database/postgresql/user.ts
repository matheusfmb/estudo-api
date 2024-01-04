import { DELETED, NOT_DELETED} from "../../../../domain/constants/utils"
import { UserEntity } from "../../../../domain/entity/user"
import { toUserModel, toUserEntity } from "./transformer/user"
import { Connection } from "./connection"
import { UserModel } from "./model/user"

async function createUser(e: UserEntity): Promise<UserEntity> {
    const model = toUserModel(e)
    const repository = await Connection.getRepository(UserModel)

    const modelI = await repository.save(model)

    return toUserEntity(modelI)
}

async function findUserByEmail(email:string): Promise<UserEntity | null>{
    const repository = await Connection.getRepository(UserModel)
    const userModel = await repository.findOne({where: {email: email}});
    return toUserEntity(userModel)
}

export {
    createUser,
    findUserByEmail
}





