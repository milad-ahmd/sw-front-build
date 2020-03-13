import { Api } from '../base/api'
import { ResponseContent } from '../base/responseContent'
import Company from '../models/company'
import FinnotechToken from '../models/finnotechToken'
import BaseCtrl from './base'
import FinnoAuth from './finnoAuth'
import { Config } from '../base/config'

export default class CompanyCtrl extends BaseCtrl {
  model = Company
  response:ResponseContent;
  options = {
    page: 1,
    limit: 10
  };
  addCompanyToDb=(req,res)=>{
    FinnotechToken.findOne().sort({created_at: -1}).exec(function(err, finno) {
      if(finno){
        console.log(finno)
        Api.getApi(`/bourse/v2/clients/${Config.CLIENT_ID}/companies`,{Authorization:`Bearer ${finno.token}`}).then(result=>{
          for(let item of result.data.result){
            const obj = new Company(item)
            obj.save((err, user) => {

            })
          }
        })

      }
    });
  }
  getAllPagination=(req,res)=>{
    let query={};
    query['deleted'] = false;
    if (req.query.filter) {
      query["$or"] = [];
      query["$or"].push({"CoName": new RegExp(req.query.filter)});
      query["$or"].push({"CoTSESymbol": new RegExp(req.query.filter)});
      query["$or"].push({"CoNameEnglish": new RegExp(req.query.filter)});
    }
    this.options.page = parseInt(req.query.page)+1;

    this.model.paginate(query,this.options, (err, docs) => {
      if (err) { return res.send(err); }
      res.status(200).json(docs);
    });
  }

}
