"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
var base_1 = require("./base");
var finnoAuth_1 = require("./finnoAuth");
var api_1 = require("../base/api");
var token_1 = require("../models/token");
var IndicesCtrl = /** @class */ (function (_super) {
    __extends(IndicesCtrl, _super);
    function IndicesCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = user_1.default;
        _this.getToken = function (req, res) {
            finnoAuth_1.default.getToken(req.body, res).then(function (token) {
                return res.status(200).json(token);
            });
        };
        _this.getFinancialStats = function (req, res) {
            var params = '';
            for (var key in req.query) {
                params += key + "=" + req.query[key] + "&";
            }
            token_1.default.findOne().sort({ created_at: -1 }).exec(function (err, result) {
                var _this = this;
                if (err)
                    console.log(err);
                if (result) {
                    var headers = {
                        'Authorization': result.token,
                    };
                    api_1.Api.getApi("/v1/stocks/financialStats?" + params, headers).then(function (data) {
                        if (data) {
                            return res.status(200).json({ isSuccess: true, data: data });
                        }
                        else {
                            var self_1 = _this;
                            finnoAuth_1.default.getToken(req.body, res).then(function (token) {
                                self_1.getFinancialStats(req, res);
                            });
                        }
                    }).catch(function (error) {
                        return res.status(200).json({ isSuccess: false, error: error });
                    });
                }
            });
        };
        return _this;
    }
    return IndicesCtrl;
}(base_1.default));
exports.default = IndicesCtrl;
//# sourceMappingURL=indices.js.map