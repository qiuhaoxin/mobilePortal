import {SUBMIT_DATA,GET_DOWNLOAD_DATA} from './actionType'

let defaultState={
	province:'',
	city:'',
	role:'',//用户类型：客户，分公司代理，伙伴机构
	tel:'',//电话
	linkman:'',//联系人
	name:'',  //机构名称
    email:'',
    product:'',
    version:'14.1'
}
export const infoData=(state=defaultState,action)=>{
    console.log("state is "+JSON.stringify(state)+" and action is "+JSON.stringify(action));
	switch(action.type){
		case SUBMIT_DATA:
           return {...state,...action.infoData};
		break;
		default:
           return state;
		break;
	}
}