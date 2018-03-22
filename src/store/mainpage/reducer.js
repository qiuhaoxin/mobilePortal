import * as mainpage from './action-type';

let defaultState={
	orderSum:'',
	name:'',
	
}
export const formData=(state=defaultState,action={})=>{
	switch(action.type){
		case mainpage.TEST:
          return {...state,...{[action.type]:"1"}}
		default:
        return state;
	}
}