class apiResponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.message =message
        this.statusCode = statusCode
        this.data = data
        this.success = statusCode < 400
    }
}

// Response mei statuscode 400 se kam m hi jata h agr isse jyada h toh Apierrors k through handle hoga