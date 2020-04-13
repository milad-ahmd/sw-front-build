"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./api/user");
var fileupload_1 = require("./api/fileupload");
var stocks_1 = require("./api/stocks");
var company_1 = require("./api/company");
function setRoutes(app) {
    app.use('/api/user', user_1.default);
    app.use('/api/company', company_1.default);
    app.use('/api/upload', fileupload_1.default);
    app.use('/api/stocks', stocks_1.default);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map