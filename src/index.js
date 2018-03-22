import React from 'react';
import ReactDom from 'react-dom';
import fastclick from 'fastclick';
import Route from './router/index';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './store/store';
import './index.less';


fastclick.attach(document.body);
store.subscribe(function(){
	console.log("subscribe!");
})
const render=Component=>{
	ReactDom.render(
      <Provider store={store}>
          <AppContainer>
               <Component/>
          </AppContainer>
      </Provider>,
      document.getElementById('root')
	)
}

render(Route);

if(module.hot){
	module.hot.accept('./router',()=>{
		render(Route)
	})
}




