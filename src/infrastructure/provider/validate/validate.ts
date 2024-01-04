function checkNumberEmpty(e: number): boolean {
    return e === undefined || e === null || Number.isNaN(e)
}

function checkStringEmpty(e: string): boolean {
    return e === undefined || e === null || e.trim() === ''
}


function checkDateEmpty(e: Date | string): boolean {
    return e === undefined || e === null
}

export {
    checkNumberEmpty,
    checkStringEmpty,
    checkDateEmpty,
}
