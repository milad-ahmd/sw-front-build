"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var moment = require('moment-timezone');
var mongoosePaginate = require("mongoose-paginate-v2");
var companySchema = new mongoose.Schema({
    // CoID:Number,
    // CoName:String,
    // CoNameEnglish:String,
    // CompanySymbol:String,
    // CoTSESymbol:String,
    // GroupID:Number,
    // GroupName:String,
    // IndustryID:Number,
    // IndustryName:String,
    // InstCode:String,
    // TseCIsinCode:String,
    // TseSIsinCode:String,
    // MarketID:Number,
    // MarketName:String,
    key: Number,
    name: String,
    nameFA: String,
    symbolFA: String,
    displaySymbolFA: String,
    type: String,
    ticker: String,
    parentCompany: Number,
    description: { type: String, default: '' },
    avatar: { type: String, default: '' },
    deleted: { type: Boolean, default: false },
    is_active: { type: Boolean, default: false },
    is_verify: { type: Boolean, default: false },
    created_at: { type: Number, "default": moment().tz('Asia/Tehran').unix() },
    updated_at: { type: Number, "default": moment().tz('Asia/Tehran').unix() }
});
companySchema.plugin(mongoosePaginate);
var Company = mongoose.model('Company', companySchema);
exports.default = Company;
//# sourceMappingURL=company.js.map