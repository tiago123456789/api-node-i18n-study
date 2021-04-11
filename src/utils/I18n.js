module.exports = {
    getLocaleOfRequest(request) {
        return request.headers['accept-language'];
    }
}