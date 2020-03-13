"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var company_1 = require("../controllers/company");
var user_1 = require("../controllers/user");
var router = express.Router();
var userCtrl = new user_1.default();
var companyCtrl = new company_1.default();
router.route('/save').post(userCtrl.jwtTokenValidation, companyCtrl.insert);
router.route('/insert').get(companyCtrl.addCompanyToDb);
router.route('/update').put(userCtrl.jwtTokenValidation, companyCtrl.update);
router.route('/all').get(companyCtrl.getAll);
router.route('/getAll').get(companyCtrl.getAllPagination);
router.route('/filter').get(companyCtrl.getByFilter);
router.route('/get-one/:id').get(companyCtrl.get);
router.route('/multiple').put(companyCtrl.updateAll);
exports.default = router;
//# sourceMappingURL=company.js.map