export const standardResponse = (success, body) => {
    return {
        success: success,
        message: body
    }
}