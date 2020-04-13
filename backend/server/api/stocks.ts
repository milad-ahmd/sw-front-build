import * as express from 'express'
import CompanyCtrl from '../controllers/company'
import UserCtrl from '../controllers/user'
import StocksCtrl from "../controllers/stocks";

const router = express.Router();
const stocksCtrl = new StocksCtrl();

router.route('/financialStats').get(stocksCtrl.getFinancialStats);

export default router;