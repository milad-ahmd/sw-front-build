"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var moment = require('moment-timezone');
var tokenSchema = new mongoose.Schema({
    token: { type: String, required: true },
    expiration: String,
    created_at: { type: Number, "default": moment() },
    updated_at: { type: Number, "default": moment() }
});
var Token = mongoose.model('Token', tokenSchema);
exports.default = Token;
//# sourceMappingURL=token.js.map