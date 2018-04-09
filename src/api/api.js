import Request from './request';

class API extends Request{
	//提交下载客户数据
	async submitData(params={}){
        try{
           let response=this.axios('POST','/K3LADLStatisticsController/importData',params);
           if(response && response.statu===1){

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
           let response=this.axios('GET',"/K3LADLStatisticsController/getDownloadData",params);
           if(response && response.status==1){

           }else{

           }
		}catch(e){

		}
	}

}
export default new API();