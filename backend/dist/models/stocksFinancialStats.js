"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var moment = require('moment-timezone');
var mongoosePaginate = require("mongoose-paginate-v2");
var stocksFinancialStatsSchema = new mongoose.Schema({
    ticker: String,
    industryIndex: { type: String },
    items: [
        {
            item: String,
            days: [
                {
                    day: Number,
                    fiscalYear: Number,
                    fiscalMonth: Number,
                    periodEndDay: Number,
                    yearEndDay: Number,
                    values: {
                        value: Number
                    }
                }
            ]
        }
    ],
    deleted: { type: Boolean, default: false },
    created_at: { type: Number, "default": moment().tz('Asia/Tehran').unix() },
    updated_at: { type: Number, "default": moment().tz('Asia/Tehran').unix() }
});
stocksFinancialStatsSchema.plugin(mongoosePaginate);
var StocksFinancialStats = mongoose.model('StocksFinancialStats', stocksFinancialStatsSchema);
exports.default = StocksFinancialStats;
//# sourceMappingURL=stocksFinancialStats.js.map