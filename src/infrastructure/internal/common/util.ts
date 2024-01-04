import { v4 } from "uuid"

function generateUUID(): string {
    return v4()
}

export {
    generateUUID
}
