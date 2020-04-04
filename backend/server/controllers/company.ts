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
    // FinnotechToken.findOne().sort({created_at: -1}).exec(function(err, finno) {
    //   if(finno){
    //     console.log(finno)
    console.log(123)
        Api.getApi(`/companies`,{Cookie:`authentication=gAAAAABeiJal5Avfr51Pw6FVGlLULLiXwvpngano064tFQ9xT519knXPw8OTx4UnHvberJLyWRyTjW503DWWF8oJFCC2uqI3o1bKMAVBU2sOYxwX4b6j0RiLJVitvXuCnblB4VinHVpA0LqBvWpp-k-sYjIddY3IdIETCrSWZrHJ7TcJ4RjXdtb-SJUvNtc4P_mRXWB84-KdL6YqOX77eEhen45TmcLyJskySgqJeDhPp4cP8MjahxoxS_9TICnpxAlYUALs6G1RElND6bOzGveWUUjOHqA017C_McPg_1pCtuYE7Zffe7kuoIxFJgYlRWd6r8OQTKb6evNv9TWHD3kZdOLHnd1HJQ==`}).then(result=>{

          for(let item of result.data.companies){
            const obj = new Company(item)
            obj.save((err, user) => {
            })
          }
        })

      // }
    // });
  }
  getAllPagination=(req,res)=>{
    let query={};
    query['deleted'] = false;
    if (req.query.filter) {
      query["$or"] = [];
      query["$or"].push({"nameFA": new RegExp(req.query.filter)});
      query["$or"].push({"symbolFA": new RegExp(req.query.filter)});
      query["$or"].push({"name": new RegExp(req.query.filter)});
    }
    this.options.page = parseInt(req.query.page)+1;

    this.model.paginate(query,this.options, (err, docs) => {
      if (err) { return res.send(err); }
      res.status(200).json(docs);
    });
  }

}
