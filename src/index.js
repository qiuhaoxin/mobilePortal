import React from 'react';
import ReactDom from 'react-dom';
import fastclick from 'fastclick';
import Route from './router';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './store/store';


fastclick.attach(document.body);

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


