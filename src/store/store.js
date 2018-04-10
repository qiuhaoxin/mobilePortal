import {createStore,combineReducers,applyMiddleware} from 'redux';

//import * as mainpage from './mainpage/reducer';
import * as download from './download/reducer';
import thunk from 'redux-thunk';

let store=createStore(
         combineReducers({...download}),
         applyMiddleware(thunk)
	);
export default store;