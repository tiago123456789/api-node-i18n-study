const express = require("express");
const app = express();
const i18n = require('./config/I18n');
const notFoundRoute = require("./middlewares/NotFoundRoute");
const handlerException = require("./middlewares/HandlerException");
const { CODE_I18N } = require("./constants/App");
const DateFormat = require("./utils/DateFormat");
const I18nUtil = require("./utils/I18n");

app.use(express.json());
app.use(i18n.init);

app.get("/", (request, response) => {
    response.json({ msg: response.__("welcome") });
});

app.post("/auth/check", (request, response) => {
    const language = I18nUtil.getLocaleOfRequest(request);
    const credential = request.body;
    if (credential.email == null || credential.password == null) {
        return response.status(400).json({
            msg: {
                email: response.__(CODE_I18N.EMAIL_REQUIRED),
                password: response.__(CODE_I18N.PASSWORD_REQUIRED),
            },
            occurredAt: DateFormat.getDateTimeCurrent(language)
        });
    }

    if (credential.email != "teste@gmail.com" && credential.password != "123456") {
        return response.status(401).json({
            msg: response.__(CODE_I18N.USER_IS_INVALID),
            occurredAt: DateFormat.getDateTimeCurrent(language)
        });
    }

    return response.json({
        msg: response.__(CODE_I18N.USER_IS_VALID),
        occurredAt: DateFormat.getDateTimeCurrent(language)
    });
});

app.use("*", notFoundRoute);

app.use(handlerException);

app.listen(3000, () => console.log(`Server is running in: http://localhost:3000`));