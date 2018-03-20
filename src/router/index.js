import React,{Component} from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import asyncComponent from '../utils/utils';

const mainpage=asyncComponent(()=>import('../pages/MainPage/index.jsx'));
const deployment=asyncComponent(()=>import('../pages/Deployment/index.jsx'));
const apply=asyncComponent(()=>import('../pages/Apply/index.jsx'));

export default class MyComponent extends Component{
	render(){
		return (

           <HashRouter>
                <Switch>
                    <Route path="/" exact component={mainpage}/>
                    <Route path="/mainpage" component={mainpage}/>
                    <Route path="/deployment" component={deployment}/>
                    <Route path="/apply" component={apply}/>
                    <Redirect to="/"/>
                </Switch>
           </HashRouter>
		)
	}
}

