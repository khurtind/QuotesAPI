const httpStatusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500
}

const validateServerErrors = (responses, apiArray) => {
    //Counting the number of times a request failed out of all attempts
    failedResponses = responses.filter(response => response.status !== httpStatusCodes.OK)
    //Only if all the requests failed, send a message back to the user
    if(failedResponses.length === apiArray.length){
        throw new Error('We Couldnt process the request at the moment, please try later')
    }else{
        responses.forEach((response, index) => {
            if(response.status === httpStatusCodes.BAD_REQUEST){
                if(response.url === apiArray[index].fullURL){
                    apiArray[index].setResponseStatusCode(httpStatusCodes.BAD_REQUEST)
                    responses.splice(index,1)
                }
            } else if(response.status === httpStatusCodes.UNAUTHORIZED){
                if(response.url === apiArray[index].fullURL){
                    apiArray[index].setResponseStatusCode(httpStatusCodes.UNAUTHORIZED)
                    responses.splice(index,1)
                }
            }else if(response.status === httpStatusCodes.FORBIDDEN){
                if(response.url === apiArray[index].fullURL){
                    apiArray[index].setResponseStatusCode(httpStatusCodes.FORBIDDEN)
                    responses.splice(index,1)
                }
            }else if(response.status === httpStatusCodes.NOT_FOUND){
                if(response.url === apiArray[index].fullURL){
                    apiArray[index].setResponseStatusCode(httpStatusCodes.NOT_FOUND)
                    responses.splice(index,1)
                }
            }else if(response.status === httpStatusCodes.INTERNAL_SERVER){
                if(response.url === apiArray[index].fullURL){
                    apiArray[index].setResponseStatusCode(httpStatusCodes.INTERNAL_SERVER)
                    responses.splice(index,1)
                }
            }
        }) 
    }
}

module.exports = {httpStatusCodes, validateServerErrors}