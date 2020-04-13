"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var stocks_1 = require("../controllers/stocks");
var router = express.Router();
var stocksCtrl = new stocks_1.default();
router.route('/financialStats').get(stocksCtrl.getFinancialStats);
exports.default = router;
//# sourceMappingURL=stocks.js.map