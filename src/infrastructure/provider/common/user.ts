import { CreateUserUseCaseCommonInterface} from "../../../domain/usecase/common/user" 
import { generateUUID } from "../../internal/common/util"

class CreateUserUseCaseCommon implements CreateUserUseCaseCommonInterface {
    generateUUID(): string {
        return generateUUID()
    }
}

export {
    CreateUserUseCaseCommon
}