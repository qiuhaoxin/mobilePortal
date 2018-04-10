import axios from 'axios';
import envconfig from '../envconfig';

export default class Request{
	axios(method,url,params){
		return new Promise((resolve,reject)=>{
			if(typeof params!='object') params={};
			let _options=params;
			_options={
				method,
				url,
				baseURL:envconfig.baseUrl,
				timeout:10000,
				params:null,
				data:params,
				header:null,
				withCredential:true,

				 // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` 
				 //(或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
				validateStatus:(status)=>{
					return status>=200 && status <300 || status==304;
				},
				...params
			}
			axios.request(_options)
			.then(res=>{
				console.log("res is "+JSON.stringify(res));
               resolve(typeof res.data==='object' ? res.data : JSON.parse(res.data))
			},error=>{
				if(error.response){
					reject(error.response.data);
				}else{
					reject(error)
				}
			})
		})
	}
}