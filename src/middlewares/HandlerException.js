const CodeException = require("../exceptions/CodeException");
const DateFormat = require("../utils/DateFormat");
const I18nUtil = require("../utils/I18n");

module.exports = (error, request, response, next) => {
    const language = I18nUtil.getLocaleOfRequest(request);

    switch(error.name) {
        case "NotFoundException":
            return response
                    .status(404)
                    .json({
                        statusCode: 404,
                        message: response.__(error.message),
                        occurredAt: DateFormat.getDateTimeCurrent(language)
                    });
        default:
            return response
                .status(500)
                .json({
                    statusCode: 500,
                    message: response.__(CodeException.INTERNAL_SERVER_ERROR),
                    occurredAt: DateFormat.getDateTimeCurrent(language)
                });
    }
}