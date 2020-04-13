import axios from 'axios'
import { Config } from './config'

export class Api {
  public static async getApi(url, headers, params?) {
    try {
      let response= await axios({
        method: 'get',
        url: Config.BASE_API_URL + url,
        headers,
        params
      })
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  public static async postApi(url, data, headers, params?) {
    try {
      return await axios({
        method: 'post',
        url: Config.BASE_API_URL+url,
        headers,
        data,
        params
      })
    } catch (error) {
      console.error(error)
    }
  }
}