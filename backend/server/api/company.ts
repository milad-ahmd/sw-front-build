import * as express from 'express'
import CompanyCtrl from '../controllers/company'
import UserCtrl from '../controllers/user'

const router = express.Router()
const userCtrl = new UserCtrl()
const companyCtrl = new CompanyCtrl()


router.route('/save').post(userCtrl.jwtTokenValidation, companyCtrl.insert)
router.route('/insert').get(companyCtrl.addCompanyToDb)
router.route('/update').put(userCtrl.jwtTokenValidation, companyCtrl.update)
router.route('/all').get(companyCtrl.getAll)
router.route('/getAll').get(companyCtrl.getAllPagination)
router.route('/filter').get(companyCtrl.getByFilter)
router.route('/get-one/:id').get(companyCtrl.get)
router.route('/multiple').put(companyCtrl.updateAll)

export default router
