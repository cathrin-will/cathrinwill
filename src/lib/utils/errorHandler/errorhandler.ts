export const getErrorMessage = (error: unknown) => {
    console.error(error)
    let message
    if (error instanceof Error) {
        message = error.message
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = error.message
    } else if (typeof error === 'string') {
        message = error
    } else {
        message = 'Unknown error'
    }
    return message
}
