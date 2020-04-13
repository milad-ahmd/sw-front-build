import { Api } from '../base/api'
import { Config } from '../base/config'
import Token from '../models/token'
var FormData = require('form-data');

export default class FinnoAuth {
  public static getToken = (body,res) => {
    return new Promise((resolve => {
      let model=Token;
      let headers={
        'Content-Type':'application/json',
      };
      let data={
        "username": 'gharehbaghi',
        "password": 'gharehbaghi'
      };
      Api.postApi('/login',data,headers).then(result=>{
        console.log(result);
        let token={};
        if(result.data && result.data.token){
          token['token']=result.data.token;
          token['expiration']=result.data.expiration;
          const obj = new model(token);
          obj.save((err, item) => {
            if (err && err.code === 11000) {
              resolve({isSuccessful:false,errorStatus:400})
            }
            if (err) {
              resolve({isSuccessful:false,error:err,errorStatus:400})
            }
            resolve({isSuccessful:true,data:item})
          });
        }
      })
    }))
  }
}
