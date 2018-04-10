import * as DownLoad from './actionType';

//保存客户信息
export const submitData=(infoData)=>{
    return {
    	type:DownLoad.SUBMIT_DATA,
    	infoData
    }
}