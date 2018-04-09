import API from './api/api';
import * as types from './ActionType';


export const submitData=(params)=>{

	return async dispatch=>{
		let response=await API.submitData(params);
		console.log("response is "+JSON.stringify(response));
		dispatch({
			type:types.
		})
	}
}