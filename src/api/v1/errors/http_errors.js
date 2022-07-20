const httpStatusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500
}

const checkServerErrors = (response) => {
    if(response.status == httpStatusCodes.BAD_REQUEST){
        throw new Error('HTTP Error 400 – Bad Request')
    }
    if(response.status == httpStatusCodes.UNAUTHORIZED){
        throw new Error('HTTP Error 401 – Unauthorized')
    }
    if(response.status == httpStatusCodes.FORBIDDEN){
        throw new Error('HTTP Error 403 – Forbidden')
    }
    if(response.status == httpStatusCodes.NOT_FOUND){
        throw new Error('HTTP Error 404 – Not Found')
    }
    if(response.status == httpStatusCodes.INTERNAL_SERVER){
        throw new Error('HTTP Error 500 – Internal Server Error')
    }
}

module.exports = {httpStatusCodes, checkServerErrors}