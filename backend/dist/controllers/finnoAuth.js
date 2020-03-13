"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../base/api");
var config_1 = require("../base/config");
var finnotechToken_1 = require("../models/finnotechToken");
var FinnoAuth = /** @class */ (function () {
    function FinnoAuth() {
    }
    FinnoAuth.getToken = function (body, res) {
        return new Promise((function (resolve) {
            var model = finnotechToken_1.default;
            var data = {
                "grant_type": body.grant_type,
                "nid": body.nid,
                "scopes": body.scopes.join(',')
            };
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + config_1.Config.BASE64_TOKEN
            };
            api_1.Api.postApi('/dev/v2/oauth2/token', data, headers).then(function (result) {
                var token = {};
                if (result.data.status === 'DONE' && result.data.result) {
                    token['token'] = result.data.result.value;
                    token['scopes'] = result.data.result.scopes;
                    token['lifeTime'] = result.data.result.lifeTime;
                    token['creationDate'] = result.data.result.creationDate;
                    token['refreshToken'] = result.data.result.refreshToken;
                    var obj = new model(token);
                    obj.save(function (err, item) {
                        // 11000 is the code for duplicate key error
                        if (err && err.code === 11000) {
                            resolve({ isSuccessful: false, errorStatus: 400 });
                        }
                        if (err) {
                            resolve({ isSuccessful: false, error: err, errorStatus: 400 });
                        }
                        resolve({ isSuccessful: true, data: item });
                    });
                }
            });
        }));
    };
    return FinnoAuth;
}());
exports.default = FinnoAuth;
//# sourceMappingURL=finnoAuth.js.map