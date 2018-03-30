import React,{Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import './index.less';
import mobile from '../../images/mainpage/u3.png';
import kingdeeImg from '../../images/mainpage/u9.png';
import Line from '../Line/index.jsx';
import Tab from '../Tab/index.jsx';
import PropTypes from 'prop-types';

 class TabHead extends Component{
	constructor(props){
	   super(props);
     this.state={
        tabArr:[{text:'首页',key:'mainpage',url:'/mainpage',index:0,activeElement:true},
        {text:'部署',key:'deployment',url:'/deployment',index:1,activeElement:false},
        {text:'应用',key:'apply',url:'/apply',index:2},
        {text:'相关下载',key:'download',url:'/download',index:3,activeElement:false},
        {text:'帮助',key:'help',url:'/help',index:4,activeElement:false}]
     }
	}
  static contextTypes={
     router:PropTypes.object
  }
  componentWillMount(){
     const {location}=this.props;
      //console.log("location is "+JSON.stringify(location));
       if(location.pathname=="/"){
          this.props.history.push('/mainpage');
       }
  }
  //tab跳转
  handleTabClick=(item)=>{
      const {tabArr}=this.state;
      this.props.history.push(item.url);
  }
	render(){
       let {location}=this.props;
       if(location['pathname']=='/'){
           location['pathname']="/mainpage";
       }
        return (
           <div className={'wrapper'}>
              <div className="wrapper-left">
                  <img className={'kingdee-img'} src={kingdeeImg}/>
                  <Line width={'1px'} height={'48px'}/>
                  <img className={'mobile-img'} src={mobile}/>
                  <span className={'desc'}>
                    <span>K/3 WISE</span>
                    <span>移动云服务</span>
                  </span>
              </div>

              <div className="wrapper-right">
                  <Tab tabArr={this.state.tabArr} urlLocation={location} clickEvent={this.handleTabClick}/>
              </div>
           </div>
        )
	}
}
//https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link
export default withRouter(TabHead);
