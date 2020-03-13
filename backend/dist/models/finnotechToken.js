"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var moment = require('moment-timezone');
var finnotechTokenSchema = new mongoose.Schema({
    token: { type: String, required: true },
    refreshToken: { type: String, required: true },
    scopes: [String],
    lifeTime: Number,
    creationDate: Number,
    created_at: { type: Number, "default": moment() },
    updated_at: { type: Number, "default": moment() }
});
var FinnotechToken = mongoose.model('FinnotechToken', finnotechTokenSchema);
exports.default = FinnotechToken;
//# sourceMappingURL=finnotechToken.js.map