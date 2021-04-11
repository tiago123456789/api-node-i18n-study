const CodeException = require("../exceptions/CodeException");
const NotFoundException = require("../exceptions/NotFoundException");

module.exports = (request, response, next) => {
    try {
        throw new NotFoundException(CodeException.NOT_FOUND);
    } catch(error) {
        next(error);
    }
}