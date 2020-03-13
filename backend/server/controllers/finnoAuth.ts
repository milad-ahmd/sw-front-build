import { Api } from '../base/api'
import { Config } from '../base/config'
import FinnotechToken from '../models/finnotechToken'

export default class FinnoAuth {
  public static getToken = (body,res) => {
    return new Promise((resolve => {
      let model=FinnotechToken;

      let data={
        "grant_type": body.grant_type,
        "nid": body.nid,
        "scopes": body.scopes.join(',')
      }
      let headers={
        'Content-Type':'application/json',
        'Authorization':'Basic '+Config.BASE64_TOKEN
      }
      Api.postApi('/dev/v2/oauth2/token',data,headers).then(result=>{
        let token={};
        if(result.data.status==='DONE' && result.data.result){
          token['token']=result.data.result.value;
          token['scopes']=result.data.result.scopes;
          token['lifeTime']=result.data.result.lifeTime;
          token['creationDate']=result.data.result.creationDate;
          token['refreshToken']=result.data.result.refreshToken;
          const obj = new model(token);
          obj.save((err, item) => {
            // 11000 is the code for duplicate key error
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
