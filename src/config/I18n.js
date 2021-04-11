const i18n = require('i18n');

i18n.configure({

//define how many languages we would support in our application
locales:['en', 'pt'],

//define the path to language json files, default is /locales
directory: __dirname + '/../../locales',

//define the default language
defaultLocale: 'en',

});

module.exports = i18n;