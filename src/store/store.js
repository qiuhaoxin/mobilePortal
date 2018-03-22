import {createStore,combineReducers,applyMiddleware} from 'redux';

import * as mainpage from './mainpage/reducer';
import thunk from 'redux-thunk';

let store=createStore(
         combineReducers({...mainpage}),
         applyMiddleware(thunk)
	);
export default store;