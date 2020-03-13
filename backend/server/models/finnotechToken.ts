import * as mongoose from 'mongoose';
const moment = require('moment-timezone');

const finnotechTokenSchema = new mongoose.Schema({
  token: {type:String,required:true},
  refreshToken: {type:String,required:true},
  scopes:[String],
  lifeTime:Number,
  creationDate:Number,
  created_at: { type: Number, "default": moment() },
  updated_at: { type: Number, "default": moment() }
});

const FinnotechToken = mongoose.model('FinnotechToken', finnotechTokenSchema);

export default FinnotechToken;
