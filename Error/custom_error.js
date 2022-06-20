/* Custom error class  */
class customError extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
/* Function creates Object/Instance for customError class */
const createCustomError = (message, statusCode) => {
    return new customError(message, statusCode);
}


module.exports = {
    customError, createCustomError
};