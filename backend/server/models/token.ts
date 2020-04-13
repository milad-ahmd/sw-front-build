import * as mongoose from 'mongoose';
const moment = require('moment-timezone');

const tokenSchema = new mongoose.Schema({
  token: {type:String,required:true},
  expiration:String,
  created_at: { type: Number, "default": moment() },
  updated_at: { type: Number, "default": moment() }
});

const Token = mongoose.model('Token', tokenSchema);

export default Token;
