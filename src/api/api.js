import Request from './request';

class API extends Request{
	//提交下载客户数据
	async submitData(params={}){
        console.log("params is "+JSON.stringify(params));
        try{
           let response=await this.axios('POST','/Data/Handler1.ashx?ActionType=insertCustomer',params);
           if(response && response.Result===1){
              return response;
           }else{
           	  let err={

           	  }
           	  throw err;
           }
        }catch(e){

        }
	};
	//获取下载页面的数据
	async getDownloadData(params={}){
		try{
           let response=this.axios('GET',"/K3LADLStatistics/getDownloadData",params);
           if(response && response.status==1){

           }else{

           }
		}catch(e){

		}
	}

}
export default new API();