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
var StocksCtrl = /** @class */ (function (_super) {
    __extends(StocksCtrl, _super);
    function StocksCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = user_1.default;
        _this.getToken = function (req, res) {
            finnoAuth_1.default.getToken(req.body, res).then(function (token) {
                return res.status(200).json(token);
            });
        };
        _this.getFinancialStats = function (req, res) {
            var params;
            for (var key in req.query) {
                params += key + "=" + req.query[key];
            }
            token_1.default.findOne().sort({ created_at: -1 }).exec(function (err, result) {
                if (err)
                    console.log(err);
                if (result) {
                    console.log(result);
                    var headers = {
                        'Authorization': result.token,
                    };
                    api_1.Api.getApi("/v1/stocks/financialStats?" + params, headers).then(function (respone) {
                        return res.status(200).json({ isSuccess: true, data: respone });
                    }).catch(function (error) {
                        return res.status(200).json({ isSuccess: false, error: error });
                    });
                }
            });
        };
        return _this;
    }
    return StocksCtrl;
}(base_1.default));
exports.default = StocksCtrl;
//# sourceMappingURL=stocks.js.map