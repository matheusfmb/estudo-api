import { UserEntity } from "../../../../../domain/entity/user"
import { UserModel } from "../model/user"

function toUserModel(e: UserEntity): UserModel {
    return new UserModel(
        e.user_id,
        e.firstName,
        e.lastName,
        e.email,
        e.password,
        e.age,
        e.createdAt,
        e.updatedAt,
        e.isActive,
        e.isDeleted
    )
}

function toUserEntity(m: UserModel): UserEntity {
    return new UserEntity(
        m.user_id,
        m.firstName,
        m.lastName,
        m.email,
        m.password,
        m.age,
        m.createdAt,
        m.updatedAt,
        m.isActive,
        m.isDeleted
    )
}

export {
    toUserEntity,
    toUserModel
}