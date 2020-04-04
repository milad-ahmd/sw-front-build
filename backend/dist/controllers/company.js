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
var api_1 = require("../base/api");
var company_1 = require("../models/company");
var base_1 = require("./base");
var CompanyCtrl = /** @class */ (function (_super) {
    __extends(CompanyCtrl, _super);
    function CompanyCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = company_1.default;
        _this.options = {
            page: 1,
            limit: 10
        };
        _this.addCompanyToDb = function (req, res) {
            // FinnotechToken.findOne().sort({created_at: -1}).exec(function(err, finno) {
            //   if(finno){
            //     console.log(finno)
            console.log(123);
            api_1.Api.getApi("/companies", { Cookie: "authentication=gAAAAABeiJal5Avfr51Pw6FVGlLULLiXwvpngano064tFQ9xT519knXPw8OTx4UnHvberJLyWRyTjW503DWWF8oJFCC2uqI3o1bKMAVBU2sOYxwX4b6j0RiLJVitvXuCnblB4VinHVpA0LqBvWpp-k-sYjIddY3IdIETCrSWZrHJ7TcJ4RjXdtb-SJUvNtc4P_mRXWB84-KdL6YqOX77eEhen45TmcLyJskySgqJeDhPp4cP8MjahxoxS_9TICnpxAlYUALs6G1RElND6bOzGveWUUjOHqA017C_McPg_1pCtuYE7Zffe7kuoIxFJgYlRWd6r8OQTKb6evNv9TWHD3kZdOLHnd1HJQ==" }).then(function (result) {
                for (var _i = 0, _a = result.data.companies; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var obj = new company_1.default(item);
                    obj.save(function (err, user) {
                    });
                }
            });
            // }
            // });
        };
        _this.getAllPagination = function (req, res) {
            var query = {};
            query['deleted'] = false;
            if (req.query.filter) {
                query["$or"] = [];
                query["$or"].push({ "nameFA": new RegExp(req.query.filter) });
                query["$or"].push({ "symbolFA": new RegExp(req.query.filter) });
                query["$or"].push({ "name": new RegExp(req.query.filter) });
            }
            _this.options.page = parseInt(req.query.page) + 1;
            _this.model.paginate(query, _this.options, function (err, docs) {
                if (err) {
                    return res.send(err);
                }
                res.status(200).json(docs);
            });
        };
        return _this;
    }
    return CompanyCtrl;
}(base_1.default));
exports.default = CompanyCtrl;
//# sourceMappingURL=company.js.map