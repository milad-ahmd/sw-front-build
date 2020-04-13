"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var indices_1 = require("../controllers/indices");
var router = express.Router();
var indicesCtrl = new indices_1.default();
router.route('/financialStats').get(indicesCtrl.getFinancialStats);
exports.default = router;
//# sourceMappingURL=indices.js.map