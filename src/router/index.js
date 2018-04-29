import React,{Component} from 'react';
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';
import mainpage from '../pages/MainPage/index';
import TabHead from '../components/TabHead/index.jsx';

const deployment=asyncComponent(()=>import('../pages/Deployment/index'));
const apply=asyncComponent(()=>import('../pages/Apply/index'));
const download=asyncComponent(()=>import('../pages/Download/index'));
const help=asyncComponent(()=>import('../pages/Help/index'));
const video=asyncComponent(()=>import('../pages/Video/index'));

export default class MyComponent extends Component{
	render(){
		return (
           <Router>
           <Switch>
               <div>
                  <TabHead />
                  <Route exact path="/" component={mainpage}/>
                  <Route exact path="/mainpage" component={mainpage}/>
                  <Route path="/deployment" component={deployment}/>
                  <Route path="/apply" component={apply}/>
                  <Route path="/help" component={help}/>
                  <Route path="/download" component={download} />
                  <Route path="/video/:videoName" component={video}/>
                </div>

              </Switch>
           </Router>

		)
	}
};


