class ExpressError extends Error {
    construtor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;