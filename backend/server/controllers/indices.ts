import User from '../models/user'
import BaseCtrl from './base'
import FinnoAuth from './finnoAuth'
import {Api} from "../base/api";
import Token from "../models/token";

export default class IndicesCtrl extends BaseCtrl {
    model = User

    getToken = (req, res) => {
        FinnoAuth.getToken(req.body, res).then(token => {
            return res.status(200).json(token)
        })
    }
    getFinancialStats = (req, res) => {
        var params='';
        for (let key in req.query) {
            params += `${key}=${req.query[key]}&`
        }
        Token.findOne().sort({created_at: -1}).exec(function (err, result) {
            if(err)
                console.log(err);
            if (result) {
                let headers = {
                    'Authorization': result.token,
                };
                Api.getApi(`/v1/stocks/financialStats?${params}`, headers).then(data=> {
                    if(data){
                        return res.status(200).json({isSuccess: true, data})

                    }else{
                        let self=this;
                        FinnoAuth.getToken(req.body,res).then(token=>{
                            self.getFinancialStats(req,res);
                        })
                    }
                }).catch(error => {
                    return res.status(200).json({isSuccess: false, error: error})
                })
            }
        })
    }
}

