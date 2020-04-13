"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../base/api");
var token_1 = require("../models/token");
var FormData = require('form-data');
var FinnoAuth = /** @class */ (function () {
    function FinnoAuth() {
    }
    FinnoAuth.getToken = function (body, res) {
        return new Promise((function (resolve) {
            var model = token_1.default;
            var headers = {
                'Content-Type': 'application/json',
            };
            var data = {
                "username": 'gharehbaghi',
                "password": 'gharehbaghi'
            };
            api_1.Api.postApi('/login', data, headers).then(function (result) {
                console.log(result);
                var token = {};
                if (result.data && result.data.token) {
                    token['token'] = result.data.token;
                    token['expiration'] = result.data.expiration;
                    var obj = new model(token);
                    obj.save(function (err, item) {
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