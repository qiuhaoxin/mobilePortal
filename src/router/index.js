import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';
import TabHead from '../components/TabHead/index.jsx';
// const mainpage=asyncComponent(()=>import('../pages/MainPage/index.jsx'));
import mainpage from '../pages/MainPage/index';
// const deployment=asyncComponent(()=>import('../pages/Deployment/index'));
// const apply=asyncComponent(()=>import('../pages/Apply/index'));
import deployment from '../pages/Deployment/index';
import apply from '../pages/Apply/index';
import download from '../pages/Download/index';
import help from '../pages/Help/index';

export default class MyComponent extends Component{
	render(){
		return (
           <Router>
             <div>
                <TabHead />
                <Route exact path="/" component={mainpage}/>
                <Route exact path="/mainpage" component={mainpage}/>
                <Route path="/deployment" component={deployment}/>
                <Route path="/apply" component={apply}/>
                <Route path="/help" component={help}/>
                <Route path="/download" component={download} />
              </div>
           </Router>

		)
	}
}

