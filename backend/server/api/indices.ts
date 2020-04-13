import * as express from 'express'
import IndicesCtrl from "../controllers/indices";

const router = express.Router();
const indicesCtrl = new IndicesCtrl();

router.route('/financialStats').get(indicesCtrl.getFinancialStats);

export default router;