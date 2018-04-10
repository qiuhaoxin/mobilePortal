import {SUBMIT_DATA,GET_DOWNLOAD_DATA} from './actionType'

let defaultState={
	provinceVal:'',
	cityVal:'',
	type:'',//用户类型：客户，分公司代理，伙伴机构
	tel:'',//电话
	concat:'',//联系人
	goverment:''  //机构名称
}
export const infoData=(state=defaultState,action)=>{

	switch(action.type){
		case SUBMIT_DATA:
           return {...state,...action};
		break;
		default:
           return state;
		break;
	}
}


export const 