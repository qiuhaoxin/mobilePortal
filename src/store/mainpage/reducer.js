import * as mainpage from './action-type';

lef defaultState={
	orderSum:'',
	name:'',
	
}
export const formData=(state=defaultState,action={})=>{
	switch(action.type){
		case mainpage.TEST:
          return {...state,...{state[orderSum]:"1"}}
		default:
        return state;
	}
}