import * as mongoose from 'mongoose';
const moment = require('moment-timezone');
import * as mongoosePaginate from 'mongoose-paginate-v2';

const stocksFinancialStatsSchema = new mongoose.Schema({
  ticker: String,
  industryIndex: {type:String},
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
  deleted: {type: Boolean, default: false},
  created_at: { type: Number, "default": moment().tz('Asia/Tehran').unix() },
  updated_at: { type: Number, "default": moment().tz('Asia/Tehran').unix() }
});
stocksFinancialStatsSchema.plugin(mongoosePaginate);

const StocksFinancialStats = mongoose.model('StocksFinancialStats', stocksFinancialStatsSchema);
export default StocksFinancialStats;
