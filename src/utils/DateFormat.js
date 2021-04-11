const moment = require("moment");
const formatsByLanguage = {
    "en": "MM-DD-YYYY h:mm:ss",
    "pt": "DD/MM/YYYY h:mm:ss"
};

const defaultLanguage = "en";

module.exports = {
    
    getDateTimeCurrent(language) {
        const format = formatsByLanguage[language] || formatsByLanguage[defaultLanguage];
        return moment().format(format);
    }
}